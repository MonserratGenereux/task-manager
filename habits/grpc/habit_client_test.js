var PROTO_PATH = __dirname + '/habits.proto';

var grpc = require('grpc');
var habits_proto = grpc.load(PROTO_PATH).habits;

function main() {
  var client = new habits_proto.Habits('localhost:50051',
                                       grpc.credentials.createInsecure());

  client.getHabits({input:''}, function(err, response) {
    console.log('getHabit:', response);
  });

  client.createHabit({name: 'Juanchito', type: 1, difficulty: 2}, function(err, response) {
    console.log('createHabit:', response);
  });

  client.deleteHabit({id: '1'}, function(err, response) {
    console.log('deleteHabit:', response);
  });

  client.getHabitById({id: '2'}, function(err, response) {
    console.log('getHabitById:', response);
  });

  client.updateHabit({id: '3'}, function(err, response) {
    console.log('updateHabit:', response);
  });

}

main();
