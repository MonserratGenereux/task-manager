var Response = require('./Response.js');

class StatusResponse extends Response{
  constructor(succeded, id, error){
    super(succeded,error);
    this.id = (id ? id : '');
  }

  // set id(new_id){
  //   this.id = new_id.toString();
  // }
  //
  // get id(){
  //   return this.id.toString();
  // }

  getResponse(){
    return {
      succeded: this.succeded,
      habitId: this.id,
      error: this.error
    }
  }

}

module.exports = StatusResponse;
