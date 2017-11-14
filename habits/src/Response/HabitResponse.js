var Response = require('./Response.js');

class HabitResponse extends Response{
  constructor(succeded, habit, error){
    super(succeded,error);
    this.habit = (habit ? habit : {});
  }

  getResponse(){
    return {
      succeded: this.succeded,
      habit: this.habit,
      error: this.error
    }
  }

}

module.exports = HabitResponse;
