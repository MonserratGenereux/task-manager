var HabitSchema = require('./../schema/Habit.js');
var Habit = require('./../HabitClass.js').Habit;

var getHabitsHandler = function (request) {
    console.log("getHabitsHandler", request);
    var GetHabits = {}
    return new Promise((accept,reject)=>{
      HabitSchema.find({userId: request.userId})
        .then((habits)=>{
          var habitsArray = habits.map(function(habit){
            return new Habit(habit).getHabit()
          });
          GetHabits.succeded = true;
          GetHabits.habits = habitsArray;
          console.log("GET HABITS", GetHabits);
          return accept(GetHabits);
        })
        .catch((err)=>{
          GetHabits.succeded = false;
          GetHabits.habits = [];
          console.log("GET HABITS ERR", GetHabits);
          return accept(GetHabits);
        })
    })
}

module.exports = getHabitsHandler;
