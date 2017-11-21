var Request = require('./../Request');
var HabitResponse = require('./../Response/HabitResponse.js');
var Habit = require('./../Habit');

class MarkHabitRequest extends Request{
  constructor(request){
    super(request);
    this.response = new HabitResponse();
    this.obtainData();
  }

  obtainData(){
    this._id = this.request._id;
    this.userId = this.request.userId;
    this.bad = this.request.bad;
    this.good = this.request.good;
  }

  updateResponse(succeded, habit, error){
    this.response.succeded = succeded;
    this.response.habit = habit;
    this.response.error = error;
  }

  execute(){
    return new Promise((accept, reject)=>{
      this.db_schema.findOne({_id: this._id, userId: this.userId})
        .then((habit)=>{
          var newHabit = new Habit(habit);
          newHabit.updateScore(this.good, this.bad);
          habit.score = newHabit.score;
          habit.color = newHabit.color;
          habit.save()
            .then((ok)=>{
              this.updateResponse(true,  newHabit.getCopy(),'');
              newHabit.publishChanges();
              return accept(this.response.generate());
            })
            .catch((err)=>{
              this.updateResponse(false, {}, err.message);
              accept(this.response.generate());
            })
        })
        .catch((err)=>{
          this.updateResponse(false, {}, err.message);
          accept(this.response.generate());
        })
    });
  }
}

module.exports = MarkHabitRequest;
