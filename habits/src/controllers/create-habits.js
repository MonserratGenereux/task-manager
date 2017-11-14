var HabitSchema = require('./../schema/Habit.js');
var BasicHabit = require('./../HabitClass.js').BasicHabit;
var StatusResponse = require('./../StatusResponse.js');

var CreateRequest = require('./../Request/CreateRequest.js');

var createHabitHandler = function(request){
  return new CreateRequest(request).execute();
}

module.exports = createHabitHandler;
