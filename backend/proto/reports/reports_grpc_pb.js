// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var reports_reports_pb = require('../reports/reports_pb.js');
var habits_habits_pb = require('../habits/habits_pb.js');
var tasks_tasks_pb = require('../tasks/tasks_pb.js');

function serialize_reports_AccountID(arg) {
  if (!(arg instanceof reports_reports_pb.AccountID)) {
    throw new Error('Expected argument of type reports.AccountID');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_reports_AccountID(buffer_arg) {
  return reports_reports_pb.AccountID.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_reports_Empty(arg) {
  if (!(arg instanceof reports_reports_pb.Empty)) {
    throw new Error('Expected argument of type reports.Empty');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_reports_Empty(buffer_arg) {
  return reports_reports_pb.Empty.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_reports_HabitsReport(arg) {
  if (!(arg instanceof reports_reports_pb.HabitsReport)) {
    throw new Error('Expected argument of type reports.HabitsReport');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_reports_HabitsReport(buffer_arg) {
  return reports_reports_pb.HabitsReport.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_reports_HabitsUserReport(arg) {
  if (!(arg instanceof reports_reports_pb.HabitsUserReport)) {
    throw new Error('Expected argument of type reports.HabitsUserReport');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_reports_HabitsUserReport(buffer_arg) {
  return reports_reports_pb.HabitsUserReport.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_reports_TasksReport(arg) {
  if (!(arg instanceof reports_reports_pb.TasksReport)) {
    throw new Error('Expected argument of type reports.TasksReport');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_reports_TasksReport(buffer_arg) {
  return reports_reports_pb.TasksReport.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_reports_TasksUserReport(arg) {
  if (!(arg instanceof reports_reports_pb.TasksUserReport)) {
    throw new Error('Expected argument of type reports.TasksUserReport');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_reports_TasksUserReport(buffer_arg) {
  return reports_reports_pb.TasksUserReport.deserializeBinary(new Uint8Array(buffer_arg));
}


// The Reports service definition.
var ReportsServiceService = exports.ReportsServiceService = {
  getHabitsReport: {
    path: '/reports.ReportsService/GetHabitsReport',
    requestStream: false,
    responseStream: false,
    requestType: reports_reports_pb.Empty,
    responseType: reports_reports_pb.HabitsReport,
    requestSerialize: serialize_reports_Empty,
    requestDeserialize: deserialize_reports_Empty,
    responseSerialize: serialize_reports_HabitsReport,
    responseDeserialize: deserialize_reports_HabitsReport,
  },
  getHabitsUserReport: {
    path: '/reports.ReportsService/GetHabitsUserReport',
    requestStream: false,
    responseStream: false,
    requestType: reports_reports_pb.AccountID,
    responseType: reports_reports_pb.HabitsUserReport,
    requestSerialize: serialize_reports_AccountID,
    requestDeserialize: deserialize_reports_AccountID,
    responseSerialize: serialize_reports_HabitsUserReport,
    responseDeserialize: deserialize_reports_HabitsUserReport,
  },
  getTasksReport: {
    path: '/reports.ReportsService/GetTasksReport',
    requestStream: false,
    responseStream: false,
    requestType: reports_reports_pb.Empty,
    responseType: reports_reports_pb.TasksReport,
    requestSerialize: serialize_reports_Empty,
    requestDeserialize: deserialize_reports_Empty,
    responseSerialize: serialize_reports_TasksReport,
    responseDeserialize: deserialize_reports_TasksReport,
  },
  getTasksUserReport: {
    path: '/reports.ReportsService/GetTasksUserReport',
    requestStream: false,
    responseStream: false,
    requestType: reports_reports_pb.AccountID,
    responseType: reports_reports_pb.TasksUserReport,
    requestSerialize: serialize_reports_AccountID,
    requestDeserialize: deserialize_reports_AccountID,
    responseSerialize: serialize_reports_TasksUserReport,
    responseDeserialize: deserialize_reports_TasksUserReport,
  },
};

exports.ReportsServiceClient = grpc.makeGenericClientConstructor(ReportsServiceService);
