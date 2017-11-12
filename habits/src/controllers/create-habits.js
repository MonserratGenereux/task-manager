var HabitSchema = require('./../schema/Habit.js');
var BasicHabit = require('./../HabitClass.js').BasicHabit;

var createHabitHandler = function(request){
    var habit = new BasicHabit(request).getHabit();
    var statusResponse = {}
    return new Promise((accept, reject)=>{
      HabitSchema.create(habit)
        .then((habit)=>{
          statusResponse.succeded = true;
          statusResponse.habitId = habit._id.toString();
          statusResponse.error = "";
          console.log("CREATE STATUS:", statusResponse);
          accept(statusResponse)
        },(error)=>{
          statusResponse.succeded = false;
          statusResponse.habitId = "";
          statusResponse.error = error.message;
          console.log("CREATE STATUS ER:", statusResponse);
          reject(statusResponse)
        })
    })

}

module.exports = createHabitHandler;
