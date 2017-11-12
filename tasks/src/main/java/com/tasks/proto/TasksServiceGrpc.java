package com.tasks.proto;

import static io.grpc.stub.ClientCalls.asyncUnaryCall;
import static io.grpc.stub.ClientCalls.asyncServerStreamingCall;
import static io.grpc.stub.ClientCalls.asyncClientStreamingCall;
import static io.grpc.stub.ClientCalls.asyncBidiStreamingCall;
import static io.grpc.stub.ClientCalls.blockingUnaryCall;
import static io.grpc.stub.ClientCalls.blockingServerStreamingCall;
import static io.grpc.stub.ClientCalls.futureUnaryCall;
import static io.grpc.MethodDescriptor.generateFullMethodName;
import static io.grpc.stub.ServerCalls.asyncUnaryCall;
import static io.grpc.stub.ServerCalls.asyncServerStreamingCall;
import static io.grpc.stub.ServerCalls.asyncClientStreamingCall;
import static io.grpc.stub.ServerCalls.asyncBidiStreamingCall;
import static io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall;
import static io.grpc.stub.ServerCalls.asyncUnimplementedStreamingCall;

/**
 */
@javax.annotation.Generated(
    value = "by gRPC proto compiler (version 1.7.0)",
    comments = "Source: task.proto")
public final class TasksServiceGrpc {

  private TasksServiceGrpc() {}

  public static final String SERVICE_NAME = "com.tasks.proto.TasksService";

  // Static method descriptors that strictly reflect the proto.
  @io.grpc.ExperimentalApi("https://github.com/grpc/grpc-java/issues/1901")
  public static final io.grpc.MethodDescriptor<com.tasks.proto.TasksMicroservice.UserID,
      com.tasks.proto.TasksMicroservice.Tasks> METHOD_GET_TASKS =
      io.grpc.MethodDescriptor.<com.tasks.proto.TasksMicroservice.UserID, com.tasks.proto.TasksMicroservice.Tasks>newBuilder()
          .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
          .setFullMethodName(generateFullMethodName(
              "com.tasks.proto.TasksService", "GetTasks"))
          .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
              com.tasks.proto.TasksMicroservice.UserID.getDefaultInstance()))
          .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
              com.tasks.proto.TasksMicroservice.Tasks.getDefaultInstance()))
          .setSchemaDescriptor(new TasksServiceMethodDescriptorSupplier("GetTasks"))
          .build();
  @io.grpc.ExperimentalApi("https://github.com/grpc/grpc-java/issues/1901")
  public static final io.grpc.MethodDescriptor<com.tasks.proto.TasksMicroservice.Task,
      com.tasks.proto.TasksMicroservice.StatusResponse> METHOD_CREATE_TASK =
      io.grpc.MethodDescriptor.<com.tasks.proto.TasksMicroservice.Task, com.tasks.proto.TasksMicroservice.StatusResponse>newBuilder()
          .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
          .setFullMethodName(generateFullMethodName(
              "com.tasks.proto.TasksService", "CreateTask"))
          .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
              com.tasks.proto.TasksMicroservice.Task.getDefaultInstance()))
          .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
              com.tasks.proto.TasksMicroservice.StatusResponse.getDefaultInstance()))
          .setSchemaDescriptor(new TasksServiceMethodDescriptorSupplier("CreateTask"))
          .build();
  @io.grpc.ExperimentalApi("https://github.com/grpc/grpc-java/issues/1901")
  public static final io.grpc.MethodDescriptor<com.tasks.proto.TasksMicroservice.TaskID,
      com.tasks.proto.TasksMicroservice.StatusResponse> METHOD_DELETE_TASK =
      io.grpc.MethodDescriptor.<com.tasks.proto.TasksMicroservice.TaskID, com.tasks.proto.TasksMicroservice.StatusResponse>newBuilder()
          .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
          .setFullMethodName(generateFullMethodName(
              "com.tasks.proto.TasksService", "DeleteTask"))
          .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
              com.tasks.proto.TasksMicroservice.TaskID.getDefaultInstance()))
          .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
              com.tasks.proto.TasksMicroservice.StatusResponse.getDefaultInstance()))
          .setSchemaDescriptor(new TasksServiceMethodDescriptorSupplier("DeleteTask"))
          .build();
  @io.grpc.ExperimentalApi("https://github.com/grpc/grpc-java/issues/1901")
  public static final io.grpc.MethodDescriptor<com.tasks.proto.TasksMicroservice.TaskID,
      com.tasks.proto.TasksMicroservice.Task> METHOD_GET_TASK_BY_ID =
      io.grpc.MethodDescriptor.<com.tasks.proto.TasksMicroservice.TaskID, com.tasks.proto.TasksMicroservice.Task>newBuilder()
          .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
          .setFullMethodName(generateFullMethodName(
              "com.tasks.proto.TasksService", "GetTaskById"))
          .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
              com.tasks.proto.TasksMicroservice.TaskID.getDefaultInstance()))
          .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
              com.tasks.proto.TasksMicroservice.Task.getDefaultInstance()))
          .setSchemaDescriptor(new TasksServiceMethodDescriptorSupplier("GetTaskById"))
          .build();
  @io.grpc.ExperimentalApi("https://github.com/grpc/grpc-java/issues/1901")
  public static final io.grpc.MethodDescriptor<com.tasks.proto.TasksMicroservice.Task,
      com.tasks.proto.TasksMicroservice.StatusResponse> METHOD_UPDATE_TASK =
      io.grpc.MethodDescriptor.<com.tasks.proto.TasksMicroservice.Task, com.tasks.proto.TasksMicroservice.StatusResponse>newBuilder()
          .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
          .setFullMethodName(generateFullMethodName(
              "com.tasks.proto.TasksService", "UpdateTask"))
          .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
              com.tasks.proto.TasksMicroservice.Task.getDefaultInstance()))
          .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
              com.tasks.proto.TasksMicroservice.StatusResponse.getDefaultInstance()))
          .setSchemaDescriptor(new TasksServiceMethodDescriptorSupplier("UpdateTask"))
          .build();
  @io.grpc.ExperimentalApi("https://github.com/grpc/grpc-java/issues/1901")
  public static final io.grpc.MethodDescriptor<com.tasks.proto.TasksMicroservice.TaskID,
      com.tasks.proto.TasksMicroservice.Task> METHOD_COMPLETE_TASK =
      io.grpc.MethodDescriptor.<com.tasks.proto.TasksMicroservice.TaskID, com.tasks.proto.TasksMicroservice.Task>newBuilder()
          .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
          .setFullMethodName(generateFullMethodName(
              "com.tasks.proto.TasksService", "CompleteTask"))
          .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
              com.tasks.proto.TasksMicroservice.TaskID.getDefaultInstance()))
          .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
              com.tasks.proto.TasksMicroservice.Task.getDefaultInstance()))
          .setSchemaDescriptor(new TasksServiceMethodDescriptorSupplier("CompleteTask"))
          .build();

  /**
   * Creates a new async stub that supports all call types for the service
   */
  public static TasksServiceStub newStub(io.grpc.Channel channel) {
    return new TasksServiceStub(channel);
  }

  /**
   * Creates a new blocking-style stub that supports unary and streaming output calls on the service
   */
  public static TasksServiceBlockingStub newBlockingStub(
      io.grpc.Channel channel) {
    return new TasksServiceBlockingStub(channel);
  }

  /**
   * Creates a new ListenableFuture-style stub that supports unary calls on the service
   */
  public static TasksServiceFutureStub newFutureStub(
      io.grpc.Channel channel) {
    return new TasksServiceFutureStub(channel);
  }

  /**
   */
  public static abstract class TasksServiceImplBase implements io.grpc.BindableService {

    /**
     * <pre>
     * Get a list of tasks from the User ID
     * </pre>
     */
    public void getTasks(com.tasks.proto.TasksMicroservice.UserID request,
        io.grpc.stub.StreamObserver<com.tasks.proto.TasksMicroservice.Tasks> responseObserver) {
      asyncUnimplementedUnaryCall(METHOD_GET_TASKS, responseObserver);
    }

    /**
     * <pre>
     * Create a task based on the User ID
     * </pre>
     */
    public void createTask(com.tasks.proto.TasksMicroservice.Task request,
        io.grpc.stub.StreamObserver<com.tasks.proto.TasksMicroservice.StatusResponse> responseObserver) {
      asyncUnimplementedUnaryCall(METHOD_CREATE_TASK, responseObserver);
    }

    /**
     * <pre>
     * Delete a task based on the User ID
     * </pre>
     */
    public void deleteTask(com.tasks.proto.TasksMicroservice.TaskID request,
        io.grpc.stub.StreamObserver<com.tasks.proto.TasksMicroservice.StatusResponse> responseObserver) {
      asyncUnimplementedUnaryCall(METHOD_DELETE_TASK, responseObserver);
    }

    /**
     * <pre>
     * Get a specific task based on the task ID
     * </pre>
     */
    public void getTaskById(com.tasks.proto.TasksMicroservice.TaskID request,
        io.grpc.stub.StreamObserver<com.tasks.proto.TasksMicroservice.Task> responseObserver) {
      asyncUnimplementedUnaryCall(METHOD_GET_TASK_BY_ID, responseObserver);
    }

    /**
     * <pre>
     * Update a specific task based on the task ID
     * </pre>
     */
    public void updateTask(com.tasks.proto.TasksMicroservice.Task request,
        io.grpc.stub.StreamObserver<com.tasks.proto.TasksMicroservice.StatusResponse> responseObserver) {
      asyncUnimplementedUnaryCall(METHOD_UPDATE_TASK, responseObserver);
    }

    /**
     * <pre>
     * Mark the task as completed 
     * </pre>
     */
    public void completeTask(com.tasks.proto.TasksMicroservice.TaskID request,
        io.grpc.stub.StreamObserver<com.tasks.proto.TasksMicroservice.Task> responseObserver) {
      asyncUnimplementedUnaryCall(METHOD_COMPLETE_TASK, responseObserver);
    }

    @java.lang.Override public final io.grpc.ServerServiceDefinition bindService() {
      return io.grpc.ServerServiceDefinition.builder(getServiceDescriptor())
          .addMethod(
            METHOD_GET_TASKS,
            asyncUnaryCall(
              new MethodHandlers<
                com.tasks.proto.TasksMicroservice.UserID,
                com.tasks.proto.TasksMicroservice.Tasks>(
                  this, METHODID_GET_TASKS)))
          .addMethod(
            METHOD_CREATE_TASK,
            asyncUnaryCall(
              new MethodHandlers<
                com.tasks.proto.TasksMicroservice.Task,
                com.tasks.proto.TasksMicroservice.StatusResponse>(
                  this, METHODID_CREATE_TASK)))
          .addMethod(
            METHOD_DELETE_TASK,
            asyncUnaryCall(
              new MethodHandlers<
                com.tasks.proto.TasksMicroservice.TaskID,
                com.tasks.proto.TasksMicroservice.StatusResponse>(
                  this, METHODID_DELETE_TASK)))
          .addMethod(
            METHOD_GET_TASK_BY_ID,
            asyncUnaryCall(
              new MethodHandlers<
                com.tasks.proto.TasksMicroservice.TaskID,
                com.tasks.proto.TasksMicroservice.Task>(
                  this, METHODID_GET_TASK_BY_ID)))
          .addMethod(
            METHOD_UPDATE_TASK,
            asyncUnaryCall(
              new MethodHandlers<
                com.tasks.proto.TasksMicroservice.Task,
                com.tasks.proto.TasksMicroservice.StatusResponse>(
                  this, METHODID_UPDATE_TASK)))
          .addMethod(
            METHOD_COMPLETE_TASK,
            asyncUnaryCall(
              new MethodHandlers<
                com.tasks.proto.TasksMicroservice.TaskID,
                com.tasks.proto.TasksMicroservice.Task>(
                  this, METHODID_COMPLETE_TASK)))
          .build();
    }
  }

  /**
   */
  public static final class TasksServiceStub extends io.grpc.stub.AbstractStub<TasksServiceStub> {
    private TasksServiceStub(io.grpc.Channel channel) {
      super(channel);
    }

    private TasksServiceStub(io.grpc.Channel channel,
        io.grpc.CallOptions callOptions) {
      super(channel, callOptions);
    }

    @java.lang.Override
    protected TasksServiceStub build(io.grpc.Channel channel,
        io.grpc.CallOptions callOptions) {
      return new TasksServiceStub(channel, callOptions);
    }

    /**
     * <pre>
     * Get a list of tasks from the User ID
     * </pre>
     */
    public void getTasks(com.tasks.proto.TasksMicroservice.UserID request,
        io.grpc.stub.StreamObserver<com.tasks.proto.TasksMicroservice.Tasks> responseObserver) {
      asyncUnaryCall(
          getChannel().newCall(METHOD_GET_TASKS, getCallOptions()), request, responseObserver);
    }

    /**
     * <pre>
     * Create a task based on the User ID
     * </pre>
     */
    public void createTask(com.tasks.proto.TasksMicroservice.Task request,
        io.grpc.stub.StreamObserver<com.tasks.proto.TasksMicroservice.StatusResponse> responseObserver) {
      asyncUnaryCall(
          getChannel().newCall(METHOD_CREATE_TASK, getCallOptions()), request, responseObserver);
    }

    /**
     * <pre>
     * Delete a task based on the User ID
     * </pre>
     */
    public void deleteTask(com.tasks.proto.TasksMicroservice.TaskID request,
        io.grpc.stub.StreamObserver<com.tasks.proto.TasksMicroservice.StatusResponse> responseObserver) {
      asyncUnaryCall(
          getChannel().newCall(METHOD_DELETE_TASK, getCallOptions()), request, responseObserver);
    }

    /**
     * <pre>
     * Get a specific task based on the task ID
     * </pre>
     */
    public void getTaskById(com.tasks.proto.TasksMicroservice.TaskID request,
        io.grpc.stub.StreamObserver<com.tasks.proto.TasksMicroservice.Task> responseObserver) {
      asyncUnaryCall(
          getChannel().newCall(METHOD_GET_TASK_BY_ID, getCallOptions()), request, responseObserver);
    }

    /**
     * <pre>
     * Update a specific task based on the task ID
     * </pre>
     */
    public void updateTask(com.tasks.proto.TasksMicroservice.Task request,
        io.grpc.stub.StreamObserver<com.tasks.proto.TasksMicroservice.StatusResponse> responseObserver) {
      asyncUnaryCall(
          getChannel().newCall(METHOD_UPDATE_TASK, getCallOptions()), request, responseObserver);
    }

    /**
     * <pre>
     * Mark the task as completed 
     * </pre>
     */
    public void completeTask(com.tasks.proto.TasksMicroservice.TaskID request,
        io.grpc.stub.StreamObserver<com.tasks.proto.TasksMicroservice.Task> responseObserver) {
      asyncUnaryCall(
          getChannel().newCall(METHOD_COMPLETE_TASK, getCallOptions()), request, responseObserver);
    }
  }

  /**
   */
  public static final class TasksServiceBlockingStub extends io.grpc.stub.AbstractStub<TasksServiceBlockingStub> {
    private TasksServiceBlockingStub(io.grpc.Channel channel) {
      super(channel);
    }

    private TasksServiceBlockingStub(io.grpc.Channel channel,
        io.grpc.CallOptions callOptions) {
      super(channel, callOptions);
    }

    @java.lang.Override
    protected TasksServiceBlockingStub build(io.grpc.Channel channel,
        io.grpc.CallOptions callOptions) {
      return new TasksServiceBlockingStub(channel, callOptions);
    }

    /**
     * <pre>
     * Get a list of tasks from the User ID
     * </pre>
     */
    public com.tasks.proto.TasksMicroservice.Tasks getTasks(com.tasks.proto.TasksMicroservice.UserID request) {
      return blockingUnaryCall(
          getChannel(), METHOD_GET_TASKS, getCallOptions(), request);
    }

    /**
     * <pre>
     * Create a task based on the User ID
     * </pre>
     */
    public com.tasks.proto.TasksMicroservice.StatusResponse createTask(com.tasks.proto.TasksMicroservice.Task request) {
      return blockingUnaryCall(
          getChannel(), METHOD_CREATE_TASK, getCallOptions(), request);
    }

    /**
     * <pre>
     * Delete a task based on the User ID
     * </pre>
     */
    public com.tasks.proto.TasksMicroservice.StatusResponse deleteTask(com.tasks.proto.TasksMicroservice.TaskID request) {
      return blockingUnaryCall(
          getChannel(), METHOD_DELETE_TASK, getCallOptions(), request);
    }

    /**
     * <pre>
     * Get a specific task based on the task ID
     * </pre>
     */
    public com.tasks.proto.TasksMicroservice.Task getTaskById(com.tasks.proto.TasksMicroservice.TaskID request) {
      return blockingUnaryCall(
          getChannel(), METHOD_GET_TASK_BY_ID, getCallOptions(), request);
    }

    /**
     * <pre>
     * Update a specific task based on the task ID
     * </pre>
     */
    public com.tasks.proto.TasksMicroservice.StatusResponse updateTask(com.tasks.proto.TasksMicroservice.Task request) {
      return blockingUnaryCall(
          getChannel(), METHOD_UPDATE_TASK, getCallOptions(), request);
    }

    /**
     * <pre>
     * Mark the task as completed 
     * </pre>
     */
    public com.tasks.proto.TasksMicroservice.Task completeTask(com.tasks.proto.TasksMicroservice.TaskID request) {
      return blockingUnaryCall(
          getChannel(), METHOD_COMPLETE_TASK, getCallOptions(), request);
    }
  }

  /**
   */
  public static final class TasksServiceFutureStub extends io.grpc.stub.AbstractStub<TasksServiceFutureStub> {
    private TasksServiceFutureStub(io.grpc.Channel channel) {
      super(channel);
    }

    private TasksServiceFutureStub(io.grpc.Channel channel,
        io.grpc.CallOptions callOptions) {
      super(channel, callOptions);
    }

    @java.lang.Override
    protected TasksServiceFutureStub build(io.grpc.Channel channel,
        io.grpc.CallOptions callOptions) {
      return new TasksServiceFutureStub(channel, callOptions);
    }

    /**
     * <pre>
     * Get a list of tasks from the User ID
     * </pre>
     */
    public com.google.common.util.concurrent.ListenableFuture<com.tasks.proto.TasksMicroservice.Tasks> getTasks(
        com.tasks.proto.TasksMicroservice.UserID request) {
      return futureUnaryCall(
          getChannel().newCall(METHOD_GET_TASKS, getCallOptions()), request);
    }

    /**
     * <pre>
     * Create a task based on the User ID
     * </pre>
     */
    public com.google.common.util.concurrent.ListenableFuture<com.tasks.proto.TasksMicroservice.StatusResponse> createTask(
        com.tasks.proto.TasksMicroservice.Task request) {
      return futureUnaryCall(
          getChannel().newCall(METHOD_CREATE_TASK, getCallOptions()), request);
    }

    /**
     * <pre>
     * Delete a task based on the User ID
     * </pre>
     */
    public com.google.common.util.concurrent.ListenableFuture<com.tasks.proto.TasksMicroservice.StatusResponse> deleteTask(
        com.tasks.proto.TasksMicroservice.TaskID request) {
      return futureUnaryCall(
          getChannel().newCall(METHOD_DELETE_TASK, getCallOptions()), request);
    }

    /**
     * <pre>
     * Get a specific task based on the task ID
     * </pre>
     */
    public com.google.common.util.concurrent.ListenableFuture<com.tasks.proto.TasksMicroservice.Task> getTaskById(
        com.tasks.proto.TasksMicroservice.TaskID request) {
      return futureUnaryCall(
          getChannel().newCall(METHOD_GET_TASK_BY_ID, getCallOptions()), request);
    }

    /**
     * <pre>
     * Update a specific task based on the task ID
     * </pre>
     */
    public com.google.common.util.concurrent.ListenableFuture<com.tasks.proto.TasksMicroservice.StatusResponse> updateTask(
        com.tasks.proto.TasksMicroservice.Task request) {
      return futureUnaryCall(
          getChannel().newCall(METHOD_UPDATE_TASK, getCallOptions()), request);
    }

    /**
     * <pre>
     * Mark the task as completed 
     * </pre>
     */
    public com.google.common.util.concurrent.ListenableFuture<com.tasks.proto.TasksMicroservice.Task> completeTask(
        com.tasks.proto.TasksMicroservice.TaskID request) {
      return futureUnaryCall(
          getChannel().newCall(METHOD_COMPLETE_TASK, getCallOptions()), request);
    }
  }

  private static final int METHODID_GET_TASKS = 0;
  private static final int METHODID_CREATE_TASK = 1;
  private static final int METHODID_DELETE_TASK = 2;
  private static final int METHODID_GET_TASK_BY_ID = 3;
  private static final int METHODID_UPDATE_TASK = 4;
  private static final int METHODID_COMPLETE_TASK = 5;

  private static final class MethodHandlers<Req, Resp> implements
      io.grpc.stub.ServerCalls.UnaryMethod<Req, Resp>,
      io.grpc.stub.ServerCalls.ServerStreamingMethod<Req, Resp>,
      io.grpc.stub.ServerCalls.ClientStreamingMethod<Req, Resp>,
      io.grpc.stub.ServerCalls.BidiStreamingMethod<Req, Resp> {
    private final TasksServiceImplBase serviceImpl;
    private final int methodId;

    MethodHandlers(TasksServiceImplBase serviceImpl, int methodId) {
      this.serviceImpl = serviceImpl;
      this.methodId = methodId;
    }

    @java.lang.Override
    @java.lang.SuppressWarnings("unchecked")
    public void invoke(Req request, io.grpc.stub.StreamObserver<Resp> responseObserver) {
      switch (methodId) {
        case METHODID_GET_TASKS:
          serviceImpl.getTasks((com.tasks.proto.TasksMicroservice.UserID) request,
              (io.grpc.stub.StreamObserver<com.tasks.proto.TasksMicroservice.Tasks>) responseObserver);
          break;
        case METHODID_CREATE_TASK:
          serviceImpl.createTask((com.tasks.proto.TasksMicroservice.Task) request,
              (io.grpc.stub.StreamObserver<com.tasks.proto.TasksMicroservice.StatusResponse>) responseObserver);
          break;
        case METHODID_DELETE_TASK:
          serviceImpl.deleteTask((com.tasks.proto.TasksMicroservice.TaskID) request,
              (io.grpc.stub.StreamObserver<com.tasks.proto.TasksMicroservice.StatusResponse>) responseObserver);
          break;
        case METHODID_GET_TASK_BY_ID:
          serviceImpl.getTaskById((com.tasks.proto.TasksMicroservice.TaskID) request,
              (io.grpc.stub.StreamObserver<com.tasks.proto.TasksMicroservice.Task>) responseObserver);
          break;
        case METHODID_UPDATE_TASK:
          serviceImpl.updateTask((com.tasks.proto.TasksMicroservice.Task) request,
              (io.grpc.stub.StreamObserver<com.tasks.proto.TasksMicroservice.StatusResponse>) responseObserver);
          break;
        case METHODID_COMPLETE_TASK:
          serviceImpl.completeTask((com.tasks.proto.TasksMicroservice.TaskID) request,
              (io.grpc.stub.StreamObserver<com.tasks.proto.TasksMicroservice.Task>) responseObserver);
          break;
        default:
          throw new AssertionError();
      }
    }

    @java.lang.Override
    @java.lang.SuppressWarnings("unchecked")
    public io.grpc.stub.StreamObserver<Req> invoke(
        io.grpc.stub.StreamObserver<Resp> responseObserver) {
      switch (methodId) {
        default:
          throw new AssertionError();
      }
    }
  }

  private static abstract class TasksServiceBaseDescriptorSupplier
      implements io.grpc.protobuf.ProtoFileDescriptorSupplier, io.grpc.protobuf.ProtoServiceDescriptorSupplier {
    TasksServiceBaseDescriptorSupplier() {}

    @java.lang.Override
    public com.google.protobuf.Descriptors.FileDescriptor getFileDescriptor() {
      return com.tasks.proto.TasksMicroservice.getDescriptor();
    }

    @java.lang.Override
    public com.google.protobuf.Descriptors.ServiceDescriptor getServiceDescriptor() {
      return getFileDescriptor().findServiceByName("TasksService");
    }
  }

  private static final class TasksServiceFileDescriptorSupplier
      extends TasksServiceBaseDescriptorSupplier {
    TasksServiceFileDescriptorSupplier() {}
  }

  private static final class TasksServiceMethodDescriptorSupplier
      extends TasksServiceBaseDescriptorSupplier
      implements io.grpc.protobuf.ProtoMethodDescriptorSupplier {
    private final String methodName;

    TasksServiceMethodDescriptorSupplier(String methodName) {
      this.methodName = methodName;
    }

    @java.lang.Override
    public com.google.protobuf.Descriptors.MethodDescriptor getMethodDescriptor() {
      return getServiceDescriptor().findMethodByName(methodName);
    }
  }

  private static volatile io.grpc.ServiceDescriptor serviceDescriptor;

  public static io.grpc.ServiceDescriptor getServiceDescriptor() {
    io.grpc.ServiceDescriptor result = serviceDescriptor;
    if (result == null) {
      synchronized (TasksServiceGrpc.class) {
        result = serviceDescriptor;
        if (result == null) {
          serviceDescriptor = result = io.grpc.ServiceDescriptor.newBuilder(SERVICE_NAME)
              .setSchemaDescriptor(new TasksServiceFileDescriptorSupplier())
              .addMethod(METHOD_GET_TASKS)
              .addMethod(METHOD_CREATE_TASK)
              .addMethod(METHOD_DELETE_TASK)
              .addMethod(METHOD_GET_TASK_BY_ID)
              .addMethod(METHOD_UPDATE_TASK)
              .addMethod(METHOD_COMPLETE_TASK)
              .build();
        }
      }
    }
    return result;
  }
}
