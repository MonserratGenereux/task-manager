var Request = require('./../Request');
var HabitResponse = require('./../Response/HabitResponse.js');
var Habit = require('./../Habit');

class MarkAsGoodRequest extends Request{
  constructor(request){
    super(request);
    this.response = new HabitResponse();
    this.obtainData();
  }

  obtainData(){
    this._id = this.request._id;
    this.userId = this.request.userId;
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
          var habit_new = new Habit(habit);
          habit_new.updateGoodStage();
          habit.score = habit_new.score;
          habit.color = habit_new.getColor();
          habit.save()
            .then((ok)=>{
              this.updateResponse(true,  habit_new.getCopy(),'');
              new Habit(habit).publishChanges();
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

module.exports = MarkAsGoodRequest;
