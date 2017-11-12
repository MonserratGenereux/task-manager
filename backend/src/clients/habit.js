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

  // client.createHabit({userId: '1', name: 'Juan', type: "0", difficulty: "1"}, function(err, response) {
  //   console.log("createHabit: ", response, err);
  // });
  //
  // client.createHabit({userId: '1', name: 'Paco', type: "1", difficulty: "2"}, function(err, response) {
  //   console.log("createHabit: ", response, err);
  // });
  //
  // client.createHabit({userId: '2', name: 'Pedro', type: "2", difficulty: "2"}, function(err, response) {
  //   console.log("createHabit: ", response, err);
  // });

  // client.deleteHabit({_id: '5a08a148336e1c04f49b75c9'}, function(err, response) {
  //   console.log('deleteHabit:', response, err);
  // });

  // client.getHabitById({_id: '5a08a148336e1c04f49b75c9'}, function(err, response) {
  //   console.log('getHabitById:', response, err);
  // });
  //
  // client.updateHabit({_id: '5a08a148336e1c04f49b75c8', name: 'Pedro_update2', type: "1", difficulty: "1"}, function(err, response) {
  //   console.log('updateHabit:', response, err);
  // });

}

main();
