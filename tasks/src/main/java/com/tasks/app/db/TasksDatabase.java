package com.tasks.app.db;

import org.postgresql.util.PSQLException;

import com.tasks.proto.TasksMicroservice.Task;
import com.tasks.proto.TasksMicroservice.TaskID;
import com.tasks.proto.TasksMicroservice.Tasks;
import com.tasks.proto.TasksMicroservice.UserID;

public interface TasksDatabase {
	public Tasks getTasks(UserID userID) throws Exception;
	public void createTask(Task task);
	public Task getTaskById(TaskID taskID) throws Exception;
	public void deleteTask(TaskID taskID) throws Exception;
	public void updateTask(Task task) throws Exception;
	public Task completeTask(TaskID taskID) throws Exception;
}
