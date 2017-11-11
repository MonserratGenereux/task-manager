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
  callback(null, getHabitsHandler(call.request));
}
//rpc CreateHabit (InputHabits) returns (OutputHabits) {}
 function createHabit(call, callback) {
   callback(null, createHabitHandler(call.request));
  //  createHabitHandler(call.request)
  //   .then((habit)=>{
  //     var statusResponse = {
  //       succeded: true,
  //       habitId: habit._id,
  //       error: null
  //     }
  //     console.log("HABITO", statusResponse);
  //     return callback(null, statusResponse);
  //   }).catch((err)=>{
  //     console.log("Error",err);
  //     var statusResponse = {
  //       succeded: false,
  //       habitId: null,
  //       error: err
  //     }
  //     return callback(statusResponse, null);
  //   })

 }
//rpc DeleteHabit (habitId) returns (response) {}
function deleteHabit(call, callback) {
  callback(null, deleteHabitHandler(call.request));
}
// rpc GetHabitById (habitId) returns (OutputHabits) {}
function getHabitById(call, callback) {
  callback(null, getHabitByIdHandler(call.request));
}
// rpc UpdateHabit (habitId) returns (OutputHabits) {}
function updateHabit(call, callback) {
  callback(null, updateHabitHandler(call.request));
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
