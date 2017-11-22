var Request = require('./../Request');
var StatusResponse = require('./../Response/StatusResponse.js');
var Habit = require('./../Habit');

class DeleteRequest extends Request{
  constructor(request){
    super(request);
    this.response = new StatusResponse();
    this.obtainData();
  }

  obtainData(){
    this.id = this.request._id;
    this.userId = this.request.userId;
  }

  updateResponse(succeded, id, error){
    this.response.succeded = succeded;
    this.response.id = id;
    this.response.error = error;
  }

  execute(){
    return new Promise((accept, reject)=>{
      this.db_schema.find({_id: this.id, userId: this.userId})
        .remove()
        .exec()
        .then((habit)=>{
          if(habit.result.n != 0){
            this.updateResponse(true, this.id.toString(), '');
          }else{
            this.updateResponse(true, '', 'Habit not found for that user.');
          }
          accept(this.response.generate());
        })
        .catch((err)=>{
          this.updateResponse(false, '', err.message);
          accept(this.response.generate());
        })
    });
  }
}

module.exports = DeleteRequest;
