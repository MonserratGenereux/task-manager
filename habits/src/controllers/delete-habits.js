var HabitSchema = require('./../schema/Habit.js');
var StatusResponse = require('./../StatusResponse.js');

var deleteHabitHandler = function(request){
    //console.log("Delete Habit", request);
    var sr = {}
    return new Promise((accept, reject)=>{
      HabitSchema.find({_id: request._id})
        .remove()
        .exec()
        .then((habit)=>{
          sr = new StatusResponse(true,"","").getStatusResponse();
          console.log("DELETE STATUS", sr, habit.result);
          accept(sr)
        },(error)=>{
          sr = new StatusResponse(false,"",error.message).getStatusResponse();
          console.log("DELETE STATUS ERR", sr);
          accept(sr)
        })
    })
}

module.exports = deleteHabitHandler;
