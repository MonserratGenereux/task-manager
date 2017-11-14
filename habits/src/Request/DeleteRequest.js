var Request = require('./Request.js');
var StatusResponse = require('./../Response/StatusResponse.js');
var Habit = require('./../Habit/Habit.js');

class DeleteRequest extends Request{
  constructor(request){
    super(request);
    this.response = new StatusResponse();
    this.obtainData();
  }

  obtainData(){
    this.id = this.request._id;
  }

  updateResponse(succeded, id, error){
    this.response.succeded = succeded;
    this.response.id = id;
    this.response.error = error;
  }

  execute(){
    return new Promise((accept, reject)=>{
      this.db_schema.find({_id: this.id})
        .remove()
        .exec()
        .then((habit)=>{
          if(habit.result.n != 0){
            this.updateResponse(true, this.id.toString(), '');
          }else{
            this.updateResponse(true, '', 'ID not found');
          }
          accept(this.response.getResponse());
        })
        .catch((err)=>{
          this.updateResponse(false, '', err.message);
          accept(this.response.getResponse());
        })
    });
  }
}

module.exports = DeleteRequest;
