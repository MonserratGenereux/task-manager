var HabitSchema = require('./../schema/Habit.js');
var Habit = require('./../Habit.js').Habit;
var StatusResponse = require('./../StatusResponse.js');

var updateHabitHandler = function(request){
    var sr;
    return new Promise((accept,reject)=>{
      var habitUpdate = new Habit(request);
      HabitSchema.findByIdAndUpdate(habitUpdate.getId(), habitUpdate.getHabitUpdate())
        .then((updated)=>{
          sr = new StatusResponse(true, updated._id.toString(),"").getStatusResponse();
          console.log("UPDATE STATUS : ", sr);
          accept(sr);
        })
        .catch((error)=>{
          sr = new StatusResponse(false, "", error.message).getStatusResponse();
          console.log("UPDATE STATUS  ERR: ", sr);
          reject(sr);
        })

    })
}

module.exports = updateHabitHandler;
