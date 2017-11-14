var Request = require('./Request.js');
var StatusResponse = require('./../Response/StatusResponse.js');
var Habit = require('./../Habit/Habit.js');

class UpdateRequest extends Request{
  constructor(request){
    super(request);
    this.response = new StatusResponse();
    this.obtainData();
  }

  obtainData(){
    this.habit = new Habit(this.request);
  }

  updateResponse(succeded, id, error){
    this.response.succeded = succeded;
    this.response.id = id;
    this.response.error = error;
  }

  execute(){
    return new Promise((accept, reject)=>{
      this.db_schema.findByIdAndUpdate(this.habit._id.toString(), this.habit.getHabitUpdate())
        .then((habit)=>{
          this.updateResponse(true, habit._id.toString(), '');
          accept(this.response.getResponse());
        })
        .catch((err)=>{
          this.updateResponse(false, '', err.message);
          accept(this.response.getResponse());
        })
    });
  }
}

module.exports = UpdateRequest;
