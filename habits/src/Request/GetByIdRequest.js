var Request = require('./../Request');
var HabitResponse = require('./../Response/HabitResponse.js');
var Habit = require('./../Habit');

class GetByIdRequest extends Request{
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
          var my_habit = new Habit(habit).getCopy();
          this.updateResponse(true, my_habit,'');
          accept(this.response.generate());
        })
        .catch((err)=>{
          this.updateResponse(false, {}, err.message);
          accept(this.response.generate());
        })
    });
  }
}

module.exports = GetByIdRequest;
