package com.tasks.app;

import com.tasks.proto.TasksServiceGrpc;
import com.tasks.proto.TasksMicroservice.UserID;
import com.tasks.proto.TasksMicroservice.Task;
import com.tasks.proto.TasksMicroservice.TaskID;
import com.tasks.proto.TasksMicroservice.Tasks;
import com.tasks.proto.TasksMicroservice.StatusResponse;
import io.grpc.stub.StreamObserver; 

public class TasksImpl extends TasksServiceGrpc.TasksServiceImplBase {
	
	@Override
    public void getTasks(UserID userID, StreamObserver<Tasks> responseObserver) {
    	System.out.println("El usuario es " + userID.getId());
    }
	
	@Override
	public void createTask(Task task, StreamObserver<StatusResponse> responseObserver){
		System.out.println("El task es "+ task.getTitle());
	}
	
	@Override
	public void getTaskById(TaskID taskID, StreamObserver<Task> responseObserver){
		System.out.println("El task id es: "+ taskID.getId());
	}
	
	@Override
	public void deleteTask(TaskID taskID, StreamObserver<StatusResponse> responseObserver){
		System.out.println("El task id es: "+ taskID.getId());
	}
	
	@Override
	public void updateTask(Task task, StreamObserver<StatusResponse> responseObserver){
		System.out.println("El task fue creado: "+ task.getCreatedTimestamp());
	}
	
	
	@Override
	public void completeTask(TaskID taskID, StreamObserver<Task> responseObserver){
		System.out.println("El task id es: "+ taskID.getId());
	}
	
	
	
}
