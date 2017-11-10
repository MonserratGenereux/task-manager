const path = require('path');
const GRPC_PORT = '0.0.0.0:50051';
var PROTO_PATH = path.join(__dirname, '/../../shared/proto/habits/habit.proto');
var grpc = require('grpc');
var habits_proto = grpc.load(PROTO_PATH).habits;

var getHabitsHandler =      require('./../src/get-habits.js');
var createHabitHandler =    require('./../src/create-habits.js');
var deleteHabitHandler =    require('./../src/delete-habits.js');
var getHabitByIdHandler =   require('./../src/get-by-id-habits.js');
var updateHabitHandler =    require('./../src/update-habits.js');

//rpc GetHabits (emptyInput) returns (HabitsResponse)
function getHabits(call, callback) {
  callback(null, getHabitsHandler(call.request));
}
//rpc CreateHabit (InputHabits) returns (OutputHabits) {}
 function createHabit(call, callback) {
   callback(null, createHabitHandler(call.request));
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
  server.addProtoService(habits_proto.Habits.service, {
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
