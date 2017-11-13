var HabitSchema = require('./../schema/Habit.js');
var Habit = require('./../HabitClass.js').Habit;

var markGoodBadHandler = function (request) {
    var GetHabits = {}
    return new Promise((accept,reject)=>{
      HabitSchema.findOne({_id: request._id})
        .then((habit)=>{
          habit_new = new Habit(habit);
          habit_new.updateScore(request.good, request.bad);
          habit.score = habit_new.score;
          habit.color = habit_new.color;
          habit.save()
            .then((ok)=>{
              GetHabits.succeded = true;
              GetHabits.habit = habit_new.getHabit();
              return accept(GetHabits);
            })
            .catch((err)=>{
              console.log("Error", error);
              GetHabits.succeded = false;
              GetHabits.habit = {};
              return accept(GetHabits);
            })
        })
        .catch((error)=>{
          console.log("Fallo el FindOne", error);
          GetHabits.succeded = false;
          GetHabits.habit = {};
          return accept(GetHabits);
        })
    })
}

module.exports = markGoodBadHandler;
