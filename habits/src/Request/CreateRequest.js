var Request = require('./Request.js');
var StatusResponse = require('./../Response/StatusResponse.js');
var Habit = require('./../Habit/Habit.js');

class CreateRequest extends Request{
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

  isValidRequest(){
    if(!this.habit.good && !this.habit.bad){
      return false;
    }
    return true;
  }

  execute(){
    return new Promise((accept, reject)=>{
      if(this.isValidRequest()){
        this.db_schema.create(this.habit.getHabit())
          .then((habit)=>{
            this.updateResponse(true, habit._id.toString(), '');
            accept(this.response.getResponse());
          })
          .catch((err)=>{
            this.updateResponse(false, '', err.message);
            accept(this.response.getResponse());
          })
      }else{
        this.updateResponse(false, '', 'Habit cannot be neigher good or bad');
        accept(this.response.getResponse());
      }

    });
  }
}

module.exports = CreateRequest;
