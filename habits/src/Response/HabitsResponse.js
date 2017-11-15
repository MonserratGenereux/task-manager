var Response = require('./../Response');

class HabitsResponse extends Response{
  constructor(succeded, habits, error){
    super(succeded,error);
    this.habits = (habits ? habits : {});
  }

  generate(){
    return {
      succeded: this.succeded,
      habits: this.habits,
      error: this.error
    }
  }
}

module.exports = HabitsResponse;
