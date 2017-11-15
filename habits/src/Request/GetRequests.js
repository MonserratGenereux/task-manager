var Request = require('./../Request');
var HabitsResponse = require('./../Response/HabitsResponse.js');
var Habit = require('./../Habit');

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
            return new Habit(h).getCopy();
          });
          this.updateResponse(true, habitsArray,'');
          accept(this.response.generate());
        })
        .catch((err)=>{
          this.updateResponse(false, [], err.message);
          accept(this.response.generate());
        })
    });
  }
}

module.exports = GetRequests;
