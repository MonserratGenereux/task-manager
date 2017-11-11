const path = require('path');
var PROTO_PATH = path.join(__dirname, '/../../../shared/proto/habits/habit.proto');

var grpc = require('grpc');
var habits_proto = grpc.load(PROTO_PATH).habits;

function main() {
  var client = new habits_proto.HabitService('localhost:50051',
                                       grpc.credentials.createInsecure());

  client.getHabits({id:'123'}, function(err, response) {
    console.log('getHabit:', response);
  });

  client.createHabit({id: 'asd1', name: 'Juanchito', type: "1", difficulty: "1"}, function(err, response) {
    console.log("Res: ", response);
    if(err){
      console.log("Create Habits Error:", err.message);
    }else{
      console.log('createHabit:', response);
    }
  });

  client.deleteHabit({id: '1'}, function(err, response) {
    console.log('deleteHabit:', response);
  });

  client.getHabitById({id: '2'}, function(err, response) {
    console.log('getHabitById:', response);
  });

  client.updateHabit({id: 'asd1', name: 'Juanchito', type: "1", difficulty: "1"}, function(err, response) {
    console.log('updateHabit:', response);
  });

}

main();
