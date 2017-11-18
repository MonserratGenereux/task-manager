const constants = require("./../constants");
const Stage = require('./Stage.js');

class Habit{
  constructor(data){
    this.data =      data;
    this._id =          (data._id ? data._id.toString() : undefined);
    this.userId =       (data.userId ? data.userId : '');
    this.name =         (data.name ? data.name : '');
    this.description =  (data.description ? data.description : '');
    this.good =         data.good;
    this.bad =          data.bad;
    this.difficulty =   (data.difficulty ? data.difficulty : '');
    this.score =        (data.score ? data.score : 0);
    this.stage =        Stage.forScore(this.score);
    this.color =        this.stage.getColor();//(data.color ? data.color : constants.COLORS.ORANGE);
  }

  getCopy(){
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
      this.markAsGood();
    }else if(!this.isGood(good,bad)){
      this.markAsBad();
    }
    this.updateColor();
    return;
  }

  markAsGood(){
    if(this.color == constants.COLORS.BLUE){
      this.score += constants.SCORE.BLUE_INCREASE;
    }else if(this.color == constants.COLORS.GREEN){
      this.score += this.getScoreType() * constants.SCORE.GREEN_INCREASE;
    }else {
      this.score += this.getScoreType();
    }
  }

  markAsBad(){
    if(this.color == constants.COLORS.ORANGE){
      this.score -= this.getScoreType() * constants.SCORE.ORANGE_DECREASE;
    }else if(this.color == constants.COLORS.RED){
      this.score -= this.getScoreType() * constants.SCORE.RED_DECREASE;
    }else {
      this.score -= this.getScoreType();
    }
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

  getCopyForUpdate(){
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
