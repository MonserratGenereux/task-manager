var Request = require('./../Request');
var StatusResponse = require('./../Response/StatusResponse.js');
var Habit = require('./../Habit');

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
      this.db_schema.findByIdAndUpdate(this.habit._id.toString(), this.habit.getCopyForUpdate())
        .then((habit)=>{
          this.updateResponse(true, habit._id.toString(), '');
          habit.publishChanges();
          accept(this.response.generate());
        })
        .catch((err)=>{
          this.updateResponse(false, '', err.message);
          accept(this.response.generate());
        })
    });
  }
}

module.exports = UpdateRequest;
