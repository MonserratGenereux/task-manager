const constants = require("./../constants");

class Habit{
  constructor(request){
    for (var attr in request) {
      if (request.hasOwnProperty(attr)) {
          this[attr] = request[attr];
      }
    }
  }

  calculateScore(){
    return 0;
  }

  calculateColor(){
    return constants.COLORS.ORANGE;
  }

  getHabit(){
    return {
      _id: this._id,
      userId: this.userId,
      name: this.name,
      description: this.description,
      good: this.good,
      bad: this.bad,
      difficulty: this.difficulty,
      score: this.score,
      color: this.color
    }
  }

}

module.exports = Habit;
