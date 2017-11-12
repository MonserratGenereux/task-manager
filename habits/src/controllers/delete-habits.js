var HabitSchema = require('./../schema/Habit.js');
var deleteHabitHandler = function(request){
    //console.log("Delete Habit", request);
    var statusResponse = {}
    return new Promise((accept, reject)=>{
      HabitSchema.find({_id: request._id})
        .remove()
        .exec()
        .then((habit)=>{
          statusResponse.succeded = true;
          statusResponse.habitId = "";
          statusResponse.error = "";
          console.log("DELETE STATUS", statusResponse, habit.result);
          accept(statusResponse)
        },(error)=>{
          statusResponse.succeded = false;
          statusResponse.habitId = "";
          statusResponse.error = error.message;
          console.log("DELETE STATUS ERR", statusResponse);
          reject(statusResponse)
        })
    })
}

module.exports = deleteHabitHandler;
