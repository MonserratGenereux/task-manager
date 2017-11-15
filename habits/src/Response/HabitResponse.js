var Response = require('./../Response');

class HabitResponse extends Response{
  constructor(succeded, habit, error){
    super(succeded,error);
    this.habit = (habit ? habit : {});
  }

  generate(){
    return {
      succeded: this.succeded,
      habit: this.habit,
      error: this.error
    }
  }

}

module.exports = HabitResponse;
