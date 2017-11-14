const path = require('path');
var PROTO_PATH = path.join(__dirname, '/../../../shared/proto/habits/habit.proto');

var grpc = require('grpc');
var habits_proto = grpc.load(PROTO_PATH).habits;

function main() {
  var client = new habits_proto.HabitsService('localhost:50051',
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
  // client.createHabit({userId: '2', name: 'Pedro', good: true, bad: true, difficulty: "2"}, function(err, response) {
  //   console.log("createHabit: ", response, err);
  // });
  //
  // client.createHabit({userId: '2', name: 'Toa', good: false, bad: false, difficulty: "2"}, function(err, response) {
  //   console.log("createHabit: ", response, err);
  // });

  // client.deleteHabit({_id: '5a08e77c3cb6c701800dbe95'}, function(err, response) {
  //   console.log('deleteHabit:', response, err);
  // });

  // client.getHabitById({_id: '5a0a6d353b865967a44980cf'}, function(err, response) {
  //   console.log('getHabitById:', response, err);
  // });

  // client.updateHabit({_id: '5a0a6fa63d94a172089f1897',
  //                   userId: '2',
  //                   name: 'Pedro_updted',
  //                   description: 'Soy una descripcion',
  //                   good: true,
  //                   bad: true,
  //                   difficulty: "2"}, function(err, response) {
  //   console.log('updateHabit:', response, err);
  // });

  client.markHabit({_id: '5a0a6fa63d94a172089f1897', good: true, bad: false}, function(err, response) {
    console.log('updateHabit:', response, err);
  });

}

main();
