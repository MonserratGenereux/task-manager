var Response = require('./Response.js');

class StatusResponse extends Response{
  constructor(succeded, id, error){
    super(succeded,error);
    this.id = (id ? id : '');
  }

  getResponse(){
    return {
      succeded: this.succeded,
      habitId: this.id,
      error: this.error
    }
  }

}

module.exports = StatusResponse;
