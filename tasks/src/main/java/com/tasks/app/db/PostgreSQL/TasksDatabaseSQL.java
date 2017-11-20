package com.tasks.app.db.PostgreSQL;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.Statement;
import java.sql.Timestamp;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.List;
import java.util.Properties;

import javax.management.RuntimeErrorException;

import com.tasks.app.db.TasksDatabase;
import com.tasks.proto.TasksMicroservice.Task;
import com.tasks.proto.TasksMicroservice.TaskID;
import com.tasks.proto.TasksMicroservice.Tasks;
import com.tasks.proto.TasksMicroservice.UserID;
import com.tasks.proto.TasksMicroservice.Task.Builder;

public class TasksDatabaseSQL implements TasksDatabase {


	private static final String DBCLASS = "org.postgresql.Driver";
	private static final String DBNAME = "jdbc:postgresql://ec2-107-22-187-21.compute-1.amazonaws.com:5432/d3e0g09587p7pp?sslmode=require";
	private static final String DBUSER = "spcmdvvcotnkki";
	private static final String PASSWORD = "291382d189839207a4e3633c2d2691fc4709cbcb2a6b700928b17e4a2983f375";
	private Connection conn = null;
	private static final String DEFAULT_DISPLAY_COLOR = "default";
	private static final String URGENT_DISPLAY_COLOR = "red";

	public TasksDatabaseSQL() {
		try {
			Class.forName(DBCLASS);
			String url = DBNAME;
			Properties info = new Properties();
			info.setProperty("user", DBUSER);
			info.setProperty("password", PASSWORD);
			info.setProperty("ssl", "true");

			conn = DriverManager.getConnection(url, info);
			conn.setAutoCommit(true);
			System.out.println("Opened database successfully");
			createDB();
		} catch (Exception e) {
			System.err.println(e.getClass().getName() + ": " + e.getMessage());
			System.exit(0);
		}
	}

	private void createDB() throws Exception {
		Statement statement = conn.createStatement();

		String sqlCreateTable = "CREATE TABLE IF NOT EXISTS TASKS (ID SERIAL PRIMARY KEY,"
				+ " USER_ID       INT        NOT NULL,  TITLE 		TEXT   NOT NULL,"
				+ " DESCRIPTION   TEXT   NOT NULL,  CREATED	    TIMESTAMP  NOT NULL, "
				+ " DUE			TIMESTAMP  NOT NULL, COMPLETED		TIMESTAMP  NOT NULL,"
				+ " IS_COMPLETED  BOOLEAN    NOT NULL)";
		statement.executeUpdate(sqlCreateTable);

		String sqlReminderTask = "CREATE TABLE IF NOT EXISTS REMINDERS  (ID SERIAL PRIMARY KEY,"
				+ " REMINDER		TIMESTAMP 	NOT NULL, TASKS_ID INT REFERENCES TASKS(ID) NOT NULL )";

		statement.executeUpdate(sqlReminderTask);
		statement.close();
	}

	@Override
	public void createTask(Task task) {
		try {
			task.getReminderTimestampList();
			PreparedStatement preparedStatement = conn.prepareStatement(
					"" + "INSERT INTO TASKS (ID, USER_ID, TITLE, DESCRIPTION, CREATED, DUE, COMPLETED, DISPLAY_COLOR, IS_COMPLETED)"
							+ "VALUES (DEFAULT, ?, ?, ?, ?, ?, ?, ?) RETURNING ID");

			preparedStatement.setLong(1, task.getUserId());
			preparedStatement.setString(2, task.getTitle());
			preparedStatement.setString(3, task.getDescription());
			preparedStatement.setTimestamp(4, new Timestamp(task.getCreatedTimestamp()));
			preparedStatement.setTimestamp(5, new Timestamp(task.getDueTimestamp()));
			preparedStatement.setTimestamp(6, new Timestamp(task.getCompletedTimestamp()));
			preparedStatement.setBoolean(7, task.getIsCompleted());
			ResultSet rowTask = preparedStatement.executeQuery();
			rowTask.next();
			Long id = rowTask.getLong(1);
			preparedStatement.close();

			addTaskReminder(task.getReminderTimestampList(), id);
			System.out.println("Records created successfully");

		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}

	public void addTaskReminder(List<Long> taskReminders, long taskID) throws SQLException {
		PreparedStatement preparedStatement = conn
				.prepareStatement("INSERT INTO REMINDERS" + "(ID, REMINDER, TASKS_ID) VALUES(DEFAULT, ?, ?)");
		for (Long actualReminder : taskReminders) {
			preparedStatement.setTimestamp(1, new Timestamp(actualReminder));
			preparedStatement.setLong(2, taskID);
			preparedStatement.executeUpdate();
		}
		preparedStatement.close();
	}

	public List<Long> getRemindersList(long idTask) throws Exception {
		PreparedStatement statementTaskReminder = conn
				.prepareStatement("SELECT REMINDER FROM REMINDERS WHERE TASKS_ID = ?");
		statementTaskReminder.setLong(1, idTask);
		ResultSet selectedReminder = statementTaskReminder.executeQuery();

		List<Long> reminders = new ArrayList<>();
		while (selectedReminder.next()) {
			Timestamp reminderTime = selectedReminder.getTimestamp(1);
			long reminderTask = reminderTime.getTime();
			reminders.add(reminderTask);
		}
		statementTaskReminder.close();
		return reminders;
	}

	public boolean getShouldRemindToday(boolean isCompleted, List<Long> reminders) {
		boolean shouldRemindToday = false;
		if (isCompleted) {
			long now = System.currentTimeMillis();
			for (long remainderTimestamp : reminders) {
				if (areOnSameDay(now, remainderTimestamp)) {
					shouldRemindToday = true;
					break;
				}
			}
		}
		return shouldRemindToday;
	}

	public String getDisplayColor(long dueTime) {
		// Should display red
		String displayColor = DEFAULT_DISPLAY_COLOR;
		if (areOnSameDay(System.currentTimeMillis(), dueTime)) {
			displayColor = URGENT_DISPLAY_COLOR;
		}
		return displayColor;
	}

	@Override
	public Task getTaskById(TaskID taskID) throws Exception {
		Task task = null;
		try {
			PreparedStatement statementTask = conn.prepareStatement("SELECT * FROM TASKS WHERE ID = ?");

			Long idTask = (long) taskID.getId();
			statementTask.setLong(1, idTask);
			ResultSet selectedTask = statementTask.executeQuery();
			selectedTask.next();

			long id = selectedTask.getInt("ID");
			long userID = selectedTask.getInt("USER_ID");
			String title = selectedTask.getString("TITLE");
			String description = selectedTask.getString("DESCRIPTION");
			long createdTime = selectedTask.getTimestamp("CREATED").getTime();
			long dueTime = selectedTask.getTimestamp("DUE").getTime();
			long completedTime = selectedTask.getTimestamp("COMPLETED").getTime();
			boolean isCompleted = selectedTask.getBoolean("IS_COMPLETED");

			statementTask.close();

			Builder taskBuilder = Task.newBuilder().setId(id).setUserId(userID).setTitle(title)
					.setDescription(description).setCreatedTimestamp(createdTime).setDueTimestamp(dueTime)
					.setCompletedTimestamp(completedTime).setIsCompleted(isCompleted);

			List<Long> reminders = getRemindersList(idTask);
			taskBuilder.addAllReminderTimestamp(reminders);

			final boolean shouldRemindToday = getShouldRemindToday(isCompleted, reminders);
			taskBuilder.setReminderFlag(shouldRemindToday);

			String displayColor = getDisplayColor(dueTime);
			taskBuilder.setDisplayColor(displayColor);

			task = taskBuilder.build();

		} catch (SQLException e) {
			e.printStackTrace();
		}
		return task;
	}

	@Override
	public void deleteTask(TaskID taskID) throws Exception {
		try {
			long idTask = taskID.getId();

			PreparedStatement statementDeleteReminder = conn
					.prepareStatement("DELETE FROM REMINDERS WHERE TASKS_ID = ?");
			statementDeleteReminder.setLong(1, idTask);

			ResultSet deletedTasks = statementDeleteReminder.executeQuery();
			deletedTasks.next();
			int numberOfRowsDeleted = deletedTasks.getInt(1);

			PreparedStatement statementDeleteTask = conn.prepareStatement("DELETE FROM TASKS WHERE ID = ?");
			statementDeleteTask.setLong(1, idTask);
			statementDeleteTask.execute();

			if (numberOfRowsDeleted == 0) {
				throw new RuntimeErrorException(new Error(), "No rows deleted");
			}
		} catch (SQLException e) {
			e.printStackTrace();
		}
	}

	@Override
	public Tasks getTasks(UserID userID) throws Exception {
		Tasks tasks = null;
		try {
			PreparedStatement statementTask = conn.prepareStatement("SELECT ID FROM TASKS WHERE USER_ID = ?");
			statementTask.setLong(1, userID.getId());
			ResultSet selectedIds = statementTask.executeQuery();
			List<Task> tasksList = new ArrayList<>();
			while (selectedIds.next()) {
				int id = selectedIds.getInt(1);
				TaskID taskID = TaskID.newBuilder().setId(id).build();
				Task task = getTaskById(taskID);
				tasksList.add(task);
			}
			tasks = Tasks.newBuilder().addAllTasks(tasksList).build();
		} catch (SQLException e) {
			e.printStackTrace();
		}
		return tasks;
	}

	public void updateReminders(Task task) throws Exception {
		long idTask = task.getId();
		PreparedStatement statementUpdateReminder = conn
				.prepareStatement("UPDATE REMINDERS SET ID = DEFAULT, REMINDER = ? WHERE TASKS_ID = ?");
		List<Long> taskReminders = task.getReminderTimestampList();
		for (Long taskReminder : taskReminders) {
			statementUpdateReminder.setTimestamp(1, new Timestamp(taskReminder));
			statementUpdateReminder.setLong(2, idTask);
		}
		statementUpdateReminder.executeQuery();
	}

	@Override
	public void updateTask(Task task) throws Exception {
		updateReminders(task);
		
		long idTask = task.getId();

		PreparedStatement statementUpdateTask = conn.prepareStatement(
				"UPDATE TASKS SET USER_ID = ?,  TITLE = ?, DESCRIPTION = ?, CREATED = ?, DUE = ?, COMPLETED = ?, DISPLAY_COLOR = ?, IS_COMPLETED = ? WHERE ID = ?");

		statementUpdateTask.setLong(1, task.getUserId());
		statementUpdateTask.setString(2, task.getTitle());
		statementUpdateTask.setString(3, task.getDescription());
		statementUpdateTask.setTimestamp(4, new Timestamp(task.getCreatedTimestamp()));
		statementUpdateTask.setTimestamp(5, new Timestamp(task.getDueTimestamp()));
		statementUpdateTask.setTimestamp(6, new Timestamp(task.getCompletedTimestamp()));
		statementUpdateTask.setString(7, task.getDisplayColor());
		statementUpdateTask.setBoolean(8, task.getIsCompleted());
		statementUpdateTask.setLong(9, idTask);

		ResultSet updateReminders = statementUpdateTask.executeQuery();
		updateReminders.next();
		int rowsUpdated = updateReminders.getInt(1);

		if (rowsUpdated == 0) {
			throw new RuntimeErrorException(new Error(), "No rows updated");
		}

	}

	@Override
	public Task completeTask(TaskID taskID) throws Exception {
		Task task = getTaskById(taskID);
		Task updatedTask = Task.newBuilder().setId(task.getId()).setUserId(task.getUserId()).setTitle(task.getTitle())
				.setDescription(task.getDescription()).setCreatedTimestamp(task.getCreatedTimestamp())
				.setDueTimestamp(task.getDueTimestamp())
				// Receive timestamp request
				.setCompletedTimestamp(System.currentTimeMillis())
				.addAllReminderTimestamp(task.getReminderTimestampList()).setDisplayColor(task.getDisplayColor())
				.setIsCompleted(true).setReminderFlag(false).build();

		updateTask(updatedTask);

		return updatedTask;
	}

	private static boolean areOnSameDay(Long timestamp1, Long timestamp2) {
		Calendar cal1 = Calendar.getInstance();
		Calendar cal2 = Calendar.getInstance();
		cal1.setTimeInMillis(timestamp1);
		cal1.setTimeInMillis(timestamp2);

		return cal1.get(Calendar.YEAR) == cal2.get(Calendar.YEAR)
				&& cal1.get(Calendar.DAY_OF_YEAR) == cal2.get(Calendar.DAY_OF_YEAR);
	}
}
