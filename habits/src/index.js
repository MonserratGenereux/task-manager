const config = require('config');
const path = require('path');
const grpc = require('grpc');
const habits_proto = grpc.load(path.join(__dirname, config.get("proto_path") , config.get("proto_file"))).habits;

var CreateRequest = require('./Request/CreateRequest.js');
var DeleteRequest = require('./Request/DeleteRequest.js');
var GetByIdRequest = require('./Request/GetByIdRequest.js');
var GetRequests = require('./Request/GetRequests.js');
var MarkHabitRequest = require('./Request/MarkHabitRequest.js');
var UpdateRequest = require('./Request/UpdateRequest.js');

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

  server.bind(config.get("grpc_port"), grpc.ServerCredentials.createInsecure());
  server.start();
}

main();
