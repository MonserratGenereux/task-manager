// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var tasks_tasks_pb = require('../tasks/tasks_pb.js');

function serialize_tasks_StatusResponse(arg) {
  if (!(arg instanceof tasks_tasks_pb.StatusResponse)) {
    throw new Error('Expected argument of type tasks.StatusResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_tasks_StatusResponse(buffer_arg) {
  return tasks_tasks_pb.StatusResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tasks_Task(arg) {
  if (!(arg instanceof tasks_tasks_pb.Task)) {
    throw new Error('Expected argument of type tasks.Task');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_tasks_Task(buffer_arg) {
  return tasks_tasks_pb.Task.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tasks_TaskID(arg) {
  if (!(arg instanceof tasks_tasks_pb.TaskID)) {
    throw new Error('Expected argument of type tasks.TaskID');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_tasks_TaskID(buffer_arg) {
  return tasks_tasks_pb.TaskID.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tasks_Tasks(arg) {
  if (!(arg instanceof tasks_tasks_pb.Tasks)) {
    throw new Error('Expected argument of type tasks.Tasks');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_tasks_Tasks(buffer_arg) {
  return tasks_tasks_pb.Tasks.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tasks_UserID(arg) {
  if (!(arg instanceof tasks_tasks_pb.UserID)) {
    throw new Error('Expected argument of type tasks.UserID');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_tasks_UserID(buffer_arg) {
  return tasks_tasks_pb.UserID.deserializeBinary(new Uint8Array(buffer_arg));
}


var TasksServiceService = exports.TasksServiceService = {
  // Get a list of tasks from the User ID
  getTasks: {
    path: '/tasks.TasksService/GetTasks',
    requestStream: false,
    responseStream: false,
    requestType: tasks_tasks_pb.UserID,
    responseType: tasks_tasks_pb.Tasks,
    requestSerialize: serialize_tasks_UserID,
    requestDeserialize: deserialize_tasks_UserID,
    responseSerialize: serialize_tasks_Tasks,
    responseDeserialize: deserialize_tasks_Tasks,
  },
  // Create a task based on the User ID
  createTask: {
    path: '/tasks.TasksService/CreateTask',
    requestStream: false,
    responseStream: false,
    requestType: tasks_tasks_pb.Task,
    responseType: tasks_tasks_pb.StatusResponse,
    requestSerialize: serialize_tasks_Task,
    requestDeserialize: deserialize_tasks_Task,
    responseSerialize: serialize_tasks_StatusResponse,
    responseDeserialize: deserialize_tasks_StatusResponse,
  },
  // Delete a task based on the User ID
  deleteTask: {
    path: '/tasks.TasksService/DeleteTask',
    requestStream: false,
    responseStream: false,
    requestType: tasks_tasks_pb.TaskID,
    responseType: tasks_tasks_pb.StatusResponse,
    requestSerialize: serialize_tasks_TaskID,
    requestDeserialize: deserialize_tasks_TaskID,
    responseSerialize: serialize_tasks_StatusResponse,
    responseDeserialize: deserialize_tasks_StatusResponse,
  },
  // Get a specific task based on the task ID
  getTaskById: {
    path: '/tasks.TasksService/GetTaskById',
    requestStream: false,
    responseStream: false,
    requestType: tasks_tasks_pb.TaskID,
    responseType: tasks_tasks_pb.Task,
    requestSerialize: serialize_tasks_TaskID,
    requestDeserialize: deserialize_tasks_TaskID,
    responseSerialize: serialize_tasks_Task,
    responseDeserialize: deserialize_tasks_Task,
  },
  // Update a specific task based on the task ID
  updateTask: {
    path: '/tasks.TasksService/UpdateTask',
    requestStream: false,
    responseStream: false,
    requestType: tasks_tasks_pb.Task,
    responseType: tasks_tasks_pb.StatusResponse,
    requestSerialize: serialize_tasks_Task,
    requestDeserialize: deserialize_tasks_Task,
    responseSerialize: serialize_tasks_StatusResponse,
    responseDeserialize: deserialize_tasks_StatusResponse,
  },
  // Mark the task as completed 
  completeTask: {
    path: '/tasks.TasksService/CompleteTask',
    requestStream: false,
    responseStream: false,
    requestType: tasks_tasks_pb.TaskID,
    responseType: tasks_tasks_pb.Task,
    requestSerialize: serialize_tasks_TaskID,
    requestDeserialize: deserialize_tasks_TaskID,
    responseSerialize: serialize_tasks_Task,
    responseDeserialize: deserialize_tasks_Task,
  },
};

exports.TasksServiceClient = grpc.makeGenericClientConstructor(TasksServiceService);
