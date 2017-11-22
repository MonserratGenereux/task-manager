// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var habits_habits_pb = require('../habits/habits_pb.js');

function serialize_habits_GetHabitResponse(arg) {
  if (!(arg instanceof habits_habits_pb.GetHabitResponse)) {
    throw new Error('Expected argument of type habits.GetHabitResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_habits_GetHabitResponse(buffer_arg) {
  return habits_habits_pb.GetHabitResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_habits_GetHabitsResponse(arg) {
  if (!(arg instanceof habits_habits_pb.GetHabitsResponse)) {
    throw new Error('Expected argument of type habits.GetHabitsResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_habits_GetHabitsResponse(buffer_arg) {
  return habits_habits_pb.GetHabitsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_habits_HabitCreate(arg) {
  if (!(arg instanceof habits_habits_pb.HabitCreate)) {
    throw new Error('Expected argument of type habits.HabitCreate');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_habits_HabitCreate(buffer_arg) {
  return habits_habits_pb.HabitCreate.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_habits_HabitId(arg) {
  if (!(arg instanceof habits_habits_pb.HabitId)) {
    throw new Error('Expected argument of type habits.HabitId');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_habits_HabitId(buffer_arg) {
  return habits_habits_pb.HabitId.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_habits_HabitUpdate(arg) {
  if (!(arg instanceof habits_habits_pb.HabitUpdate)) {
    throw new Error('Expected argument of type habits.HabitUpdate');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_habits_HabitUpdate(buffer_arg) {
  return habits_habits_pb.HabitUpdate.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_habits_StatusResponse(arg) {
  if (!(arg instanceof habits_habits_pb.StatusResponse)) {
    throw new Error('Expected argument of type habits.StatusResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_habits_StatusResponse(buffer_arg) {
  return habits_habits_pb.StatusResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_habits_UserId(arg) {
  if (!(arg instanceof habits_habits_pb.UserId)) {
    throw new Error('Expected argument of type habits.UserId');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_habits_UserId(buffer_arg) {
  return habits_habits_pb.UserId.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_habits_UserMarkUpdate(arg) {
  if (!(arg instanceof habits_habits_pb.UserMarkUpdate)) {
    throw new Error('Expected argument of type habits.UserMarkUpdate');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_habits_UserMarkUpdate(buffer_arg) {
  return habits_habits_pb.UserMarkUpdate.deserializeBinary(new Uint8Array(buffer_arg));
}


var HabitsServiceService = exports.HabitsServiceService = {
  // Retrieve all habits from user
  getHabits: {
    path: '/habits.HabitsService/GetHabits',
    requestStream: false,
    responseStream: false,
    requestType: habits_habits_pb.UserId,
    responseType: habits_habits_pb.GetHabitsResponse,
    requestSerialize: serialize_habits_UserId,
    requestDeserialize: deserialize_habits_UserId,
    responseSerialize: serialize_habits_GetHabitsResponse,
    responseDeserialize: deserialize_habits_GetHabitsResponse,
  },
  // Gets an habit by ID
  getHabitById: {
    path: '/habits.HabitsService/GetHabitById',
    requestStream: false,
    responseStream: false,
    requestType: habits_habits_pb.HabitId,
    responseType: habits_habits_pb.GetHabitResponse,
    requestSerialize: serialize_habits_HabitId,
    requestDeserialize: deserialize_habits_HabitId,
    responseSerialize: serialize_habits_GetHabitResponse,
    responseDeserialize: deserialize_habits_GetHabitResponse,
  },
  // Deletes a habit by id
  deleteHabit: {
    path: '/habits.HabitsService/DeleteHabit',
    requestStream: false,
    responseStream: false,
    requestType: habits_habits_pb.HabitId,
    responseType: habits_habits_pb.StatusResponse,
    requestSerialize: serialize_habits_HabitId,
    requestDeserialize: deserialize_habits_HabitId,
    responseSerialize: serialize_habits_StatusResponse,
    responseDeserialize: deserialize_habits_StatusResponse,
  },
  // Creates new Habit, id not needed
  createHabit: {
    path: '/habits.HabitsService/CreateHabit',
    requestStream: false,
    responseStream: false,
    requestType: habits_habits_pb.HabitCreate,
    responseType: habits_habits_pb.StatusResponse,
    requestSerialize: serialize_habits_HabitCreate,
    requestDeserialize: deserialize_habits_HabitCreate,
    responseSerialize: serialize_habits_StatusResponse,
    responseDeserialize: deserialize_habits_StatusResponse,
  },
  // Updates all fields in the given habit.
  updateHabit: {
    path: '/habits.HabitsService/UpdateHabit',
    requestStream: false,
    responseStream: false,
    requestType: habits_habits_pb.HabitUpdate,
    responseType: habits_habits_pb.StatusResponse,
    requestSerialize: serialize_habits_HabitUpdate,
    requestDeserialize: deserialize_habits_HabitUpdate,
    responseSerialize: serialize_habits_StatusResponse,
    responseDeserialize: deserialize_habits_StatusResponse,
  },
  // Set as good a habit by id
  markAsBad: {
    path: '/habits.HabitsService/MarkAsBad',
    requestStream: false,
    responseStream: false,
    requestType: habits_habits_pb.UserMarkUpdate,
    responseType: habits_habits_pb.GetHabitResponse,
    requestSerialize: serialize_habits_UserMarkUpdate,
    requestDeserialize: deserialize_habits_UserMarkUpdate,
    responseSerialize: serialize_habits_GetHabitResponse,
    responseDeserialize: deserialize_habits_GetHabitResponse,
  },
  // Set as bad a habit by id
  markAsGood: {
    path: '/habits.HabitsService/MarkAsGood',
    requestStream: false,
    responseStream: false,
    requestType: habits_habits_pb.UserMarkUpdate,
    responseType: habits_habits_pb.GetHabitResponse,
    requestSerialize: serialize_habits_UserMarkUpdate,
    requestDeserialize: deserialize_habits_UserMarkUpdate,
    responseSerialize: serialize_habits_GetHabitResponse,
    responseDeserialize: deserialize_habits_GetHabitResponse,
  },
};

exports.HabitsServiceClient = grpc.makeGenericClientConstructor(HabitsServiceService);
