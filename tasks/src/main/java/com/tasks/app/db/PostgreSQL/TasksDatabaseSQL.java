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
import com.typesafe.config.Config;
import com.typesafe.config.ConfigFactory;

public class TasksDatabaseSQL implements TasksDatabase {
	private Config config;
	
	private Connection conn = null;
	private String default_display_color;
	private String urgent_display_color; 

	public TasksDatabaseSQL() {
		config = ConfigFactory.load();
		final String db_class = config.getString("database.class");
		final String db_uri = config.getString("database.uri");
		final String db_user = config.getString("database.user");
		final String password = config.getString("database.password");
		default_display_color = config.getString("color.default");
		urgent_display_color = config.getString("color.urgent");
		
		try {
			Class.forName(db_class);
			String url = db_uri;
			Properties info = new Properties();
			info.setProperty("user", db_user);
			info.setProperty("password",password);
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
	public Long createTask(Task task) {
		try {
			task.getReminderTimestampList();
			PreparedStatement preparedStatement = conn.prepareStatement(
					"" + "INSERT INTO TASKS (ID, USER_ID, TITLE, DESCRIPTION, CREATED, DUE, COMPLETED, IS_COMPLETED)"
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
			
			return id;
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		return null;
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
		if (!isCompleted) {
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
		String displayColor = default_display_color;
		if (areOnSameDay(System.currentTimeMillis(), dueTime)) {
			displayColor = urgent_display_color;
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
			
			if(!selectedTask.next()){
				return null;
			}

			task = scanTaskFromRow(selectedTask);

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
			PreparedStatement statementTask = conn.prepareStatement("SELECT * FROM TASKS WHERE USER_ID = ?");
			statementTask.setLong(1, userID.getId());
			ResultSet selectedTasks = statementTask.executeQuery();
			List<Task> tasksList = new ArrayList<>();
			while (selectedTasks.next()) {
				tasksList.add(scanTaskFromRow(selectedTasks));
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
			statementUpdateReminder.executeUpdate();
		}
		
	}

	@Override
	public void updateTask(Task task) throws Exception {
		updateReminders(task);
		
		long idTask = task.getId();

		PreparedStatement statementUpdateTask = conn.prepareStatement(
				"UPDATE TASKS SET USER_ID = ?,  TITLE = ?, DESCRIPTION = ?, CREATED = ?, DUE = ?, COMPLETED = ?, IS_COMPLETED = ? WHERE ID = ?");

		statementUpdateTask.setLong(1, task.getUserId());
		statementUpdateTask.setString(2, task.getTitle());
		statementUpdateTask.setString(3, task.getDescription());
		statementUpdateTask.setTimestamp(4, new Timestamp(task.getCreatedTimestamp()));
		statementUpdateTask.setTimestamp(5, new Timestamp(task.getDueTimestamp()));
		statementUpdateTask.setTimestamp(6, new Timestamp(task.getCompletedTimestamp()));
		statementUpdateTask.setBoolean(7, task.getIsCompleted());
		statementUpdateTask.setLong(8, idTask);
		statementUpdateTask.executeUpdate();
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
	
	private Task scanTaskFromRow(ResultSet selectedRow) throws Exception {
		long id = selectedRow.getInt("ID");
		long userIDs = selectedRow.getInt("USER_ID");
		String title = selectedRow.getString("TITLE");
		String description = selectedRow.getString("DESCRIPTION");
		long createdTime = selectedRow.getTimestamp("CREATED").getTime();
		long dueTime = selectedRow.getTimestamp("DUE").getTime();
		long completedTime = selectedRow.getTimestamp("COMPLETED").getTime();
		boolean isCompleted = selectedRow.getBoolean("IS_COMPLETED");

		Builder taskBuilder = Task.newBuilder().setId(id).setUserId(userIDs).setTitle(title)
				.setDescription(description).setCreatedTimestamp(createdTime).setDueTimestamp(dueTime)
				.setCompletedTimestamp(completedTime).setIsCompleted(isCompleted);

		List<Long> reminders = getRemindersList(id);
		taskBuilder.addAllReminderTimestamp(reminders);

		final boolean shouldRemindToday = getShouldRemindToday(isCompleted, reminders);
		taskBuilder.setReminderFlag(shouldRemindToday);

		String displayColor = getDisplayColor(dueTime);
		taskBuilder.setDisplayColor(displayColor);

		return taskBuilder.build();
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
