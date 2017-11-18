var Request = require('./../Request');
var StatusResponse = require('./../Response/StatusResponse.js');
var Habit = require('./../Habit');

class CreateRequest extends Request{
  constructor(request){
    super(request);
    this.response = new StatusResponse();
    this.obtainData();
  }

  obtainData(){
    console.log("NIGGA");
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
        this.db_schema.create(this.habit.getCopy())
          .then((habit)=>{
            this.updateResponse(true, habit._id.toString(), '');
            accept(this.response.generate());
          })
          .catch((err)=>{
            this.updateResponse(false, '', err.message);
            accept(this.response.generate());
          })
      }else{
        this.updateResponse(false, '', 'Habit cannot be neigher good or bad');
        accept(this.response.generate());
      }

    });
  }
}

module.exports = CreateRequest;
