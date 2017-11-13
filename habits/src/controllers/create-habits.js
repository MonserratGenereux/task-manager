var HabitSchema = require('./../schema/Habit.js');
var BasicHabit = require('./../HabitClass.js').BasicHabit;
var StatusResponse = require('./../StatusResponse.js');

var createHabitHandler = function(request){
    return new Promise((accept, reject)=>{
      var habit = new BasicHabit(request);
      var sr;
      if(!habit.validType()){
        sr = new StatusResponse(false, "", "Please define if its a good, bad or both for the habit.").getStatusResponse();
        console.log("CREATE STATUS ER:", sr);
        return accept(sr);
      }else{
        HabitSchema.create(habit.getHabit())
        .then((habit)=>{
          sr = new StatusResponse(true, habit._id.toString(),"").getStatusResponse();
          console.log("CREATE STATUS:", sr);
          accept(sr)
        },(error)=>{
          sr = new StatusResponse(false, "", error.message).getStatusResponse();
          console.log("CREATE STATUS ER:", sr);
          accept(sr)
        })
      }
    })

}

module.exports = createHabitHandler;
