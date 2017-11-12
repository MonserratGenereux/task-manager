var HabitSchema = require('./../schema/Habit.js');
var Habit = require('./../HabitClass.js').Habit

var getHabitByIdHandler = function(request){
    var GetHabit = {}
    return new Promise((accept, reject)=>{
      HabitSchema.findById(request._id)
        .then((habit)=>{
          var hab = new Habit(habit).getHabit();
          GetHabit.succeded = true;
          GetHabit.habit = hab;
          console.log("GET HABIT BY ID", GetHabit);
          accept(GetHabit)
        },(error)=>{
          GetHabit.succeded = false;
          GetHabit.habit = {};
          console.log("GET HABIT BY ID ERR", GetHabit);
          reject(GetHabit)
        })
    })
}

module.exports = getHabitByIdHandler;
