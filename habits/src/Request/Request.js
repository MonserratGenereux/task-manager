var schema = require('./../schema/Habit.js');
var Response = require('./../Response/Response.js');
class Request{

  constructor(request){
    this.request = request;
    this.response = new Response();
    this.connectDb();
  }

  updateResponse(succeded, error){
    this.response.succeded = succeded;
    this.response.error = error;
    //this.response = new Response(succeded, error);
  }

  connectDb(){
    this.db_schema = schema;
  }

  execute(){
    return new Promise((accept, reject)=>{
      accept(this.response.getResponse());
    })
  }
}

module.exports = Request;
