const path = require('path');
const GRPC_PORT = '0.0.0.0:50051';
var PROTO_PATH = path.join(__dirname, '/../../shared/proto/habits/habit.proto');
var grpc = require('grpc');
var habits_proto = grpc.load(PROTO_PATH).habits;

var getHabitsHandler =      require('./../src/controllers/get-habits.js');
var createHabitHandler =    require('./../src/controllers/create-habits.js');
var deleteHabitHandler =    require('./../src/controllers/delete-habits.js');
var getHabitByIdHandler =   require('./../src/controllers/get-by-id-habits.js');
var updateHabitHandler =    require('./../src/controllers/update-habits.js');

//rpc GetHabits (emptyInput) returns (HabitsResponse)
function getHabits(call, callback) {
  getHabitsHandler(call.request)
   .then((GetHabits)=>{
     console.log("Exito GetHabits:", GetHabits);
     return callback(null, GetHabits);
   }).catch((GetHabits)=>{
     console.log("Error GetHabits:", GetHabits);
     return callback(GetHabits, null);
   })
}
//rpc CreateHabit (InputHabits) returns (OutputHabits) {}
 function createHabit(call, callback) {
   createHabitHandler(call.request)
    .then((statusResponse)=>{
      return callback(null, statusResponse);
    }).catch((statusResponse)=>{
      return callback(statusResponse, null);
    })
 }
//rpc DeleteHabit (habitId) returns (response) {}
function deleteHabit(call, callback) {
  deleteHabitHandler(call.request)
   .then((statusResponse)=>{
     return callback(null, statusResponse);
   }).catch((statusResponse)=>{
     return callback(statusResponse, null);
   })
}
// rpc GetHabitById (habitId) returns (OutputHabits) {}
function getHabitById(call, callback) {
  getHabitByIdHandler(call.request)
   .then((GetHabit)=>{
     //console.log("YEA", GetHabit);
     return callback(null, GetHabit);
   }).catch((GetHabit)=>{
     //console.log("NEL", GetHabit)
     return callback(GetHabit, null);
   })
}
// rpc UpdateHabit (habitId) returns (OutputHabits) {}
function updateHabit(call, callback) {
  updateHabitHandler(call.request)
   .then((UpdatedHabit)=>{
     //console.log("YEA", GetHabit);
     return callback(null, UpdatedHabit);
   }).catch((UpdatedHabit)=>{
     //console.log("NEL", GetHabit)
     return callback(UpdatedHabit, null);
   })
}

function main() {
  var server = new grpc.Server();
  server.addProtoService(habits_proto.HabitService.service, {
    getHabits: getHabits,
    createHabit: createHabit,
    deleteHabit:deleteHabit,
    getHabitById:getHabitById,
    updateHabit:updateHabit
  });
  server.bind(GRPC_PORT, grpc.ServerCredentials.createInsecure());
  server.start();
}

main();
