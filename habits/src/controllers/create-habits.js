var HabitSchema = require('./../schema/Habit.js');
const constants = require("./../constants");

var createHabitHandler = function(request){
    console.log("Creating Habit", request);
    return {
          succeded: true,
          habitId: "1jsjadhsj2",
          error: null
        };
    // var habit = getHabit(request);
    // return new Promise((accept, reject)=>{
    //   HabitSchema.create(habit)
    //     .then((habit)=>{
    //       console.log("CREATED!", habit);
    //       accept(habit)
    //     },(error)=>{
    //       console.log("ERROR!", error);
    //       reject(error)
    //     })
    // })

}

var getHabit = function(req){
  var habit = {};
  if(req.name) habit.name = req.name;
  if(req.description) habit.description = req.description;
  if(req.type) habit.type = constants.TYPE[req.type];
  if(req.difficulty) habit.difficulty = constants.DIFFICULTY[req.difficulty];
  if(req.score) habit.score = req.score;
  if(req.color) habit.color = constants.COLOR[req.color.toUpperCase()];
  return habit;
}

module.exports = createHabitHandler;
