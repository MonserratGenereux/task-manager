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
      this.db_schema.findOne({_id: this._id})
        .then((habit)=>{
          var habit_new = new Habit(habit);
          habit_new.updateScore(this.good, this.bad);
          habit.score = habit_new.score;
          habit.color = habit_new.color;
          habit.save()
            .then((ok)=>{
              this.updateResponse(true,  habit_new.getCopy(),'');
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
