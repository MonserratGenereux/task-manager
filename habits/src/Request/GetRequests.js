var Request = require('./Request.js');
var HabitsResponse = require('./../Response/HabitsResponse.js');
var Habit = require('./../Habit/Habit.js');

class GetRequests extends Request{
  constructor(request){
    super(request);
    this.response = new HabitsResponse();
    this.obtainData();
  }

  obtainData(){
    this.userId = this.request.userId;
  }

  updateResponse(succeded, habits, error){
    this.response.succeded = succeded;
    this.response.habits = habits;
    this.response.error = error;
  }

  execute(){
    return new Promise((accept, reject)=>{
      this.db_schema.find({userId: this.userId})
        .then((habits)=>{
          var habitsArray = habits.map(function(h){
            return new Habit(h).getHabit();
          });
          this.updateResponse(true, habitsArray,'');
          accept(this.response.getResponse());
        })
        .catch((err)=>{
          this.updateResponse(false, [], err.message);
          accept(this.response.getResponse());
        })
    });
  }
}

module.exports = GetRequests;
