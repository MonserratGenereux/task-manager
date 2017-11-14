const constants = require("./../constants");

class Habit{
  constructor(request){
    this.request =      request;
    this._id =          (request._id ? request._id.toString() : undefined);
    this.userId =       (request.userId ? request.userId : '');
    this.name =         (request.name ? request.name : '');
    this.description =  (request.description ? request.description : '');
    this.good =         request.good;
    this.bad =          request.bad;
    this.difficulty =   (request.difficulty ? request.difficulty : '');
    this.score =        (request.score ? request.score : 0);
    this.color =        (request.color ? request.color : constants.COLORS.ORANGE);
  }

  getHabit(){
    var habit = {}
    if(this._id) habit._id = this._id.toString();
    habit.userId = this.userId;
    habit.name = this.name;
    habit.description = this.description;
    habit.good = this.good;
    habit.bad = this.bad;
    habit.difficulty = this.difficulty;
    habit.score = this.score;
    habit.color = this.color;

    return habit;
  }

  updateScore(good,bad){
    if(this.isGood(good,bad)){
      if(this.color == constants.COLORS.BLUE){
        this.score += constants.SCORE.BLUE_INCREASE;
      }else if(this.color == constants.COLORS.GREEN){
        this.score += this.getScoreType() * constants.SCORE.GREEN_INCREASE;
      }else {
        this.score += this.getScoreType();
      }
    }else if(!this.isGood(good,bad)){
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

  isGood(g, b){
    return g && !b;
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

module.exports = Habit;
