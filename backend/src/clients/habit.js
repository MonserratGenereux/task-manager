const path = require('path');
var PROTO_PATH = path.join(__dirname, '/../../../shared/proto/habits/habit.proto');

var grpc = require('grpc');
var habits_proto = grpc.load(PROTO_PATH).habits;

function main() {
  var client = new habits_proto.HabitService('localhost:50051',
                                       grpc.credentials.createInsecure());

  // client.getHabits({userId:'1'}, function(err, response) {
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
  client.createHabit({userId: '2', name: 'Pedro', good: true, bad: true, difficulty: "2"}, function(err, response) {
    console.log("createHabit: ", response, err);
  });
  //
  // client.createHabit({userId: '2', name: 'Toa', good: false, bad: false, difficulty: "2"}, function(err, response) {
  //   console.log("createHabit: ", response, err);
  // });

  // client.deleteHabit({_id: '5a08b3fa65f9291944c2a938'}, function(err, response) {
  //   console.log('deleteHabit:', response, err);
  // });

  // client.getHabitById({_id: '5a08d82ace356f51e46214a9'}, function(err, response) {
  //   console.log('getHabitById:', response, err);
  // });

  // client.updateHabit({_id: '5a08db72ad5dfa6ae4555b89',
  //                   userId: '1',
  //                   name: 'Juan_updted',
  //                   description: 'Soy una descripcion',
  //                   good: true,
  //                   bad: false,
  //                   difficulty: "1"}, function(err, response) {
  //   console.log('updateHabit:', response, err);
  // });

  // client.markHabit({_id: '5a08e77c3cb6c701800dbe95', good: false, bad: true}, function(err, response) {
  //   console.log('updateHabit:', response, err);
  // });

}

main();
