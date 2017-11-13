const constants = require("./constants");
class BasicHabit{
  constructor(request){
    this.request =      request;
    this._id =          (request._id ? request._id.toString() : undefined);
    this.userId =       (request.userId ? request.userId : '');
    this.name =         (request.name ? request.name : '');
    this.description =  (request.description ? request.description : '');
    this.good =         request.good;
    this.bad =          request.bad;
    this.difficulty =   (request.difficulty ? request.difficulty : '');
    this.score =        this.calculateScore();
    this.color =        this.calculateColor();
  }

  validType(){
    return this.good || this.bad;
  }

  calculateScore(){
    return 0;
  }

  calculateColor(){
    return constants.COLORS.ORANGE;
  }

  getId(){
    return this._id.toString();
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

class Habit extends BasicHabit{
  calculateScore(){
    return this.request.score
  }

  calculateColor(){
    return this.request.color
  }

  updateScore(good,bad){
    if(good && !bad){
      // Si se marco como bueno
      if(this.color == constants.COLORS.BLUE){
        this.score += constants.SCORE.BLUE_INCREASE;
      }else if(this.color == constants.COLORS.GREEN){
        this.score += this.getScoreType() * constants.SCORE.GREEN_INCREASE;
      }else {
        this.score += this.getScoreType();
      }
    }else if(bad && !good){
      // Si se marco como malo
      if(this.color == constants.COLORS.ORANGE){
        this.score -= this.getScoreType() * constants.SCORE.ORANGE_DECREASE;
      }else if(this.color == constants.COLORS.RED){
        this.score -= this.getScoreType() * constants.SCORE.RED_DECREASE;
      }else {
        this.score -= this.getScoreType();
      }
    }
    this.updateColor();
    return;
  }

  updateColor(){
    if(this.score <           constants.COLOR_RANGES.RED_UPPER_LIM){
      this.color = constants.COLORS.RED;
    }else if(this.score >     constants.COLOR_RANGES.ORANGE_LOWER_LIM
            && this.score <=  constants.COLOR_RANGES.YELLOW_LOWER_LIM){
      this.color = constants.COLORS.ORANGE;
    }else if(this.score >     constants.COLOR_RANGES.YELLOW_LOWER_LIM
            && this.score <=  constants.COLOR_RANGES.GREEN_LOWER_LIM){
      this.color = constants.COLORS.YELLOW;
    }else if(this.score >     constants.COLOR_RANGES.GREEN_LOWER_LIM
            && this.score <=  constants.COLOR_RANGES.BLUE_LOWER_LIM){
      this.color = constants.COLORS.GREEN;
    }else if(this.score >     constants.COLOR_RANGES.BLUE_LOWER_LIM){
      this.color = constants.COLORS.BLUE;
    }
  }

  getScoreType(){
    return constants.SCORE[constants.DIFFICULTY[this.difficulty]];
  }

  getScoreUpdate(){
    return {
      color: this.color,
      score: this.score,
    }
  }

  getHabitUpdate(){
    return {
      name: this.name,
      description: this.description,
      good: this.good,
      bad: this.bad,
      difficulty: this.difficulty
    }
  }
}

module.exports.BasicHabit = BasicHabit;
module.exports.Habit = Habit;
