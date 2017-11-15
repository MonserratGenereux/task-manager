var schema = require('./../schema/Habit.js');
var Response = require('./../Response');
class Request{

  constructor(request){
    this.request = request;
    this.response = new Response();
    this.getMongooseSchema();
  }

  updateResponse(succeded, error){
    this.response.succeded = succeded;
    this.response.error = error;
  }

  getMongooseSchema(){
    this.db_schema = schema;
  }

  execute(){
    return new Promise((accept, reject)=>{
      accept(this.response.generate());
    })
  }
}

module.exports = Request;
