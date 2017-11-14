var Request = require('./Request.js');
var HabitResponse = require('./../Response/HabitResponse.js');
var Habit = require('./../Habit/Habit.js');

class GetByIdRequest extends Request{
  constructor(request){
    super(request);
    this.response = new HabitResponse();
    this.obtainData();
  }

  obtainData(){
    this._id = this.request._id;
  }

  updateResponse(succeded, habit, error){
    this.response.succeded = succeded;
    this.response.habit = habit;
    this.response.error = error;
  }

  execute(){
    return new Promise((accept, reject)=>{
      this.db_schema.findById(this._id)
        .then((habit)=>{
          var my_habit = new Habit(habit._doc).getHabit();
          this.updateResponse(true, my_habit,'');
          accept(this.response.getResponse());
        })
        .catch((err)=>{
          this.updateResponse(false, {}, err.message);
          accept(this.response.getResponse());
        })
    });
  }
}

module.exports = GetByIdRequest;
