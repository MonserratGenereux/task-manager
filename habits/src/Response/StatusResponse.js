var Response = require('./../Response');

class StatusResponse extends Response{
  constructor(succeded, id, error){
    super(succeded,error);
    this.id = (id ? id : '');
  }

  generate(){
    return {
      succeded: this.succeded,
      habitId: this.id,
      error: this.error
    }
  }

}

module.exports = StatusResponse;
