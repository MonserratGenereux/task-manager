var HabitSchema = require('./../schema/Habit.js');
var Habit = require('./../HabitClass.js').Habit;

var updateHabitHandler = function(request){
    var StatusResponse = {}
    return new Promise((accept,reject)=>{
      var habitUpdate = new Habit(request);
      HabitSchema.findByIdAndUpdate(habitUpdate.getId(), habitUpdate.getHabitUpdate())
        .then((updated)=>{
          StatusResponse.succeded = true;
          StatusResponse.habitId = updated._id.toString();
          StatusResponse.error = "";
          console.log("UPDATE STATUS : ", StatusResponse);
          accept(StatusResponse);
        })
        .catch((error)=>{
          StatusResponse.succeded = false;
          StatusResponse.habitId = ""
          StatusResponse.error = error.message;
          console.log("UPDATE STATUS  ERR: ", StatusResponse);
          reject(StatusResponse);
        })

    })
}

module.exports = updateHabitHandler;
