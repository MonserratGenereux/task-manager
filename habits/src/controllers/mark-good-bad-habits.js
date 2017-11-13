var HabitSchema = require('./../schema/Habit.js');
var Habit = require('./../HabitClass.js').Habit;

var markGoodBadHandler = function (request) {
    console.log("markGoodBadHandler", request);
    var GetHabits = {}
    return new Promise((accept,reject)=>{
      HabitSchema.findOne({_id: request._id})
        .then((habit)=>{
          console.log("My Habit found", habit);
          habit_new = new Habit(habit);
          habit_new.updateScore(request.good, request.bad);
          habit.score = habit_new.score;
          habit.color = habit_new.color;
          habit.save()
            .then((ok)=>{
              console.log("ok: ", ok);
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



      // HabitSchema.findById(request._id)
        // .then((habit)=>{
        //   console.log("habit", habit);
        //   habit_new = new Habit(habit);
        //   last_score = habit_new.getScoreUpdate();
        //   habit_new.updateScore(request.good, request.bad);
        //   new_score = habit_new.getScoreUpdate();
        //   habit.update(last_score,new_score)
        //     .then((BEACH)=>{
        //       console.log("NEWWW EBACCH", BEACH);
        //
        //     })
        //   console.log("habit_new", habit_new.getHabit());
        //   console.log("ScoreUpdate", habit_new.getScoreUpdate());
        //   console.log("Upd ID", habit_new.getId());
        //   habit.score = habit_new.score;
        //   habit.color = habit_new.color;
        //   habit.save();
        //   HabitSchema.findByIdAndUpdate(habit_new.getId(), habit_new.getScoreUpdate())
        //     .then((updatedHabit)=>{
        //       console.log("updatedHabit", updatedHabit);
        //       updHabit = new Habit(updatedHabit);
        //       GetHabits.succeded = true;
        //       GetHabits.habit = updHabit.getHabit();
        //       console.log("GET HABITS", GetHabits);
        //       return accept(GetHabits);
        //     })
        //     .catch((error)=>{
        //       GetHabits.succeded = false;
        //       GetHabits.habit = {};
        //       console.log("GET HABITS", GetHabits);
        //       return accept(GetHabits);
        //     })
        // })
        // .catch((err)=>{
        //   GetHabits.succeded = false;
        //   GetHabits.habit = {};
        //   console.log("GET HABITS ERR", GetHabits);
        //   return accept(GetHabits);
        // })
    })
}

module.exports = markGoodBadHandler;
