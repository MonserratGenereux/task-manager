const PROTO_PATH = __dirname + '/../../../shared/proto/habits/habits.proto';

var grpc = require('grpc');
var habits_proto = grpc.load(PROTO_PATH).habits;

const client = new habits_proto.HabitsService(
  'localhost:50051',
  grpc.credentials.createInsecure());

module.exports = client;

// function main() {
//   var client = new habits_proto.HabitsService('localhost:50051',
//                                        grpc.credentials.createInsecure());

  // client.getHabits({userId:'2'}, function(err, response) {
  //   console.log('getHabit:', response, err);
  // });

  // client.createHabit({userId: '1', name: 'Juan', description: 'Soy una descripcion', good: true, bad: false, difficulty: "1"}, function(err, response) {
  //   console.log("createHabit: ", response, err);
  // });
  //
  // client.createHabit({userId: '1', name: 'Paco', good: false, bad: true, difficulty: "2"}, function(err, response) {
  //   console.log("createHabit: ", response, err);
  // });
  //
  // client.createHabit({userId: '2', name: 'Pedro', good: true, bad: true, difficulty: "2"}, function(err, response) {
  //   console.log("createHabit: ", response, err);
  // });
  //
  // client.createHabit({userId: '2', name: 'Toa', good: false, bad: false, difficulty: "2"}, function(err, response) {
  //   console.log("createHabit: ", response, err);
  // });

  // client.deleteHabit({_id: '5a0b3769f50f1d2e60fb555a',}, function(err, response) {
  //   console.log('deleteHabit:', response, err);
  // });

  // client.getHabitById({_id: '5a0b3769f50f1d2e60fb555a',userId: "1"}, function(err, response) {
  //   console.log('getHabitById:', response, err);
  // });

  // client.updateHabit({_id: '5a0b3769f50f1d2e60fb5558',
  //                   userId: '2',
  //                   name: 'Paco_Update',
  //                   description: 'Soy una descripcion',
  //                   good: true,
  //                   bad: true,
  //                   difficulty: "0"}, function(err, response) {
  //   console.log('updateHabit:', response, err);
  // });

  // client.markHabit({_id: '5a0b3769f50f1d2e60fb5558', good: false, bad: true}, function(err, response) {
  //   console.log('updateHabit:', response, err);
  // });

// }
//
// main();
