const config = require('config');
const path = require('path');
const fs = require('fs');
const grpc = require('grpc');

// Load proto file.
const protoPath = config.get('proto_path');
const protoFile = config.get('proto_file');
const protoFilepath = path.isAbsolute(protoPath) ?
                path.join(protoPath, protoFile) : 
                path.join(__dirname, protoPath, protoFile);

if (!fs.statSync(protoFilepath).isFile()) {
  throw new Error(`Provided proto file ${protoFile} does not exist`);
}

const habitsProto = grpc.load(protoFilepath).habits;

var CreateRequest = require('../Request/CreateRequest.js');
var DeleteRequest = require('../Request/DeleteRequest.js');
var GetByIdRequest = require('../Request/GetByIdRequest.js');
var GetRequests = require('../Request/GetRequests.js');
var MarkHabitRequest = require('../Request/MarkHabitRequest.js');
var UpdateRequest = require('../Request/UpdateRequest.js');

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

var server = new grpc.Server();
server.addService(habitsProto.HabitsService.service, {
  getHabits,
  createHabit,
  deleteHabit,
  getHabitById,
  updateHabit,
  markHabit
});

const host = config.get("server.host");
const port = config.get("server.port");
const address = host + ":" + port;
server.bind(address, grpc.ServerCredentials.createInsecure());
console.log(`GPRC server listening on ${address}`);

module.exports = server;
