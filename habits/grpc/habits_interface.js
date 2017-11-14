const path = require('path');
const GRPC_PORT = '0.0.0.0:50051';
var PROTO_PATH = path.join(__dirname, '/../../shared/proto/habits/habits.proto');
var grpc = require('grpc');
var habits_proto = grpc.load(PROTO_PATH).habits;

var CreateRequest = require('./../src/Request/CreateRequest.js');
var DeleteRequest = require('./../src/Request/DeleteRequest.js');
var GetByIdRequest = require('./../src/Request/GetByIdRequest.js');
var GetRequests = require('./../src/Request/GetRequests.js');
var MarkHabitRequest = require('./../src/Request/MarkHabitRequest.js');
var UpdateRequest = require('./../src/Request/UpdateRequest.js');

function getHabits(call, callback) {
  new GetRequests(call.request)
    .execute()
    .then((GetHabits)=>{
     return callback(null, GetHabits);
    }).catch((GetHabits)=>{
     return callback(GetHabits, null);
    })
}

function createHabit(call, callback) {
   new CreateRequest(call.request)
    .execute()
    .then((statusResponse)=>{
      return callback(null, statusResponse);
    }).catch((statusResponseErr)=>{
      return callback(statusResponseErr, null);
    })
 }

 function deleteHabit(call, callback) {
  new DeleteRequest(call.request)
    .execute()
    .then((statusResponse)=>{
     return callback(null, statusResponse);
    }).catch((statusResponse)=>{
     return callback(statusResponse, null);
    })
}

function getHabitById(call, callback) {
  new GetByIdRequest(call.request)
    .execute()
    .then((GetHabit)=>{
     return callback(null, GetHabit);
    }).catch((GetHabit)=>{
     return callback(GetHabit, null);
    })
}

function updateHabit(call, callback) {
  new UpdateRequest(call.request)
    .execute()
    .then((UpdatedHabit)=>{
     return callback(null, UpdatedHabit);
    }).catch((UpdatedHabit)=>{
     return callback(UpdatedHabit, null);
    })
}

function markHabit(call, callback) {
  new MarkHabitRequest(call.request)
    .execute()
    .then((GetHabit)=>{
     return callback(null, GetHabit);
    }).catch((GetHabit)=>{
     return callback(GetHabit, null);
    })
}

function main() {
  var server = new grpc.Server();
  server.addProtoService(habits_proto.HabitsService.service, {
    getHabits,
    createHabit,
    deleteHabit,
    getHabitById,
    updateHabit,
    markHabit
  });
  server.bind(GRPC_PORT, grpc.ServerCredentials.createInsecure());
  server.start();
}

main();
