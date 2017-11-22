package com.tasks.app;

import com.tasks.app.db.TasksDatabase;
import com.tasks.proto.TasksMicroservice.GetTaskResponse;
import com.tasks.proto.TasksMicroservice.GetTasksResponse;
import com.tasks.proto.TasksMicroservice.StatusResponse;
import com.tasks.proto.TasksMicroservice.Task;
import com.tasks.proto.TasksMicroservice.TaskID;
import com.tasks.proto.TasksMicroservice.Tasks;
import com.tasks.proto.TasksMicroservice.UserID;
import com.tasks.proto.TasksServiceGrpc;

import io.grpc.stub.StreamObserver;

public class TasksImpl extends TasksServiceGrpc.TasksServiceImplBase {

	private TasksDatabase db;

	public TasksImpl(TasksDatabase db) {
		this.db = db;
	}

	@Override
	public void getTasks(UserID userID, StreamObserver<GetTasksResponse> responseObserver) {
		try {
			Tasks tasks = db.getTasks(userID);
			
			GetTasksResponse getTasksResponse = GetTasksResponse.newBuilder().setSucceded(true)
					.addAllTasks(tasks.getTasksList()).build();
			responseObserver.onNext(getTasksResponse);
		} catch (Exception e) {
			responseObserver.onError(e);
		}
		responseObserver.onCompleted();
	}

	@Override
	public void createTask(Task task, StreamObserver<StatusResponse> responseObserver) {
		System.out.println(task);
		try {
			db.createTask(task);
			responseObserver.onNext(StatusResponse.newBuilder().setError("").setSucceeded(true).build());
		} catch (Exception e) {
			responseObserver.onError(e);
		}
		responseObserver.onCompleted();
	}

	@Override
	public void getTaskById(TaskID taskID, StreamObserver<GetTaskResponse> responseObserver) {
		try {
			Task task = db.getTaskById(taskID);
			GetTaskResponse getTaskResponse;
			if (task == null) {
				getTaskResponse = GetTaskResponse.newBuilder().setError("No task found").setSucceded(false).build();
			} else {
				getTaskResponse = GetTaskResponse.newBuilder().setTask(task).setSucceded(true).build();
			}
			responseObserver.onNext(getTaskResponse);
		} catch (Exception e) {
			responseObserver.onError(e);
		}
		responseObserver.onCompleted();
	}

	@Override
	public void deleteTask(TaskID taskID, StreamObserver<StatusResponse> responseObserver) {
		try {
			db.deleteTask(taskID);
			responseObserver.onNext(StatusResponse.newBuilder().setError("").setSucceeded(true).build());
		} catch (Exception e) {
			responseObserver.onError(e);
		}
		responseObserver.onCompleted();

	}

	@Override
	public void updateTask(Task task, StreamObserver<StatusResponse> responseObserver) {
		try {
			db.updateTask(task);
			responseObserver.onNext(StatusResponse.newBuilder().setError("").setSucceeded(true).build());
		} catch (Exception e) {
			responseObserver.onError(e);
		}
		responseObserver.onCompleted();
	}

	@Override
	public void completeTask(TaskID taskID, StreamObserver<Task> responseObserver) {
		try {
			Task task = db.completeTask(taskID);
			responseObserver.onNext(task);
		} catch (Exception e) {
			responseObserver.onError(e);
		}
		responseObserver.onCompleted();
	}

}
