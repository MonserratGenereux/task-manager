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

class HabitClass{
  constructor(new_habit, previous_score){
    if(arguments.length > 1){
      this.habit.previous_score = previous_score;
      this.habit.previous_color = calculateColor(this.previous_score);
    }
    this.habit = {}
    this.habit._id =          (new_habit._id ? new_habit._id.toString() : undefined);
    this.habit.userId =       (new_habit.userId ? new_habit.userId : '');
    this.habit.name =         (new_habit.name ? new_habit.name : '');
    this.habit.description =  (new_habit.description ? new_habit.description : '');
    this.habit.type =         (new_habit.type ? new_habit.type : '');
    this.habit.difficulty =   (new_habit.difficulty ? new_habit.difficulty : '');
    this.score = this.calculateScore();
    this.color = this.calculateColor(this.score);
  }


  getHabit() {
    return this.myHabit;
  }

  getId(){
    return this.myHabit._id;
  }

  calculateScore(){
    var score = (this.previous_score ? this.previous_score : 0);
    console.log("TYPE: ", this.habit.type);
    switch (this.habit.type) {
      case constants.TYPE_VALUE.GOOD:
        if(this.previous_color == constants.COLORS.GREEN){
          score += constants.SCORE.GOOD/2;
        }else if(this.previous_color == constants.COLORS.BLUE){
          score += constants.SCORE.GOOD_FROM_BLUE;
        }else{
          score += constants.SCORE.GOOD;
        }
        break;
      case constants.TYPE_VALUE.BAD:
        if(this.previous_color == constants.COLORS.ORANGE){
          score -= constants.SCORE.BAD * constants.SCORE.BAD_FROM_ORANGE;
        }else if(this.previous_color == constants.COLORS.RED){
          score -= constants.SCORE.BAD * constants.SCORE.BAD_FROM_RED;
        }else{
          score += constants.SCORE.BAD;
        }
        break;
      case constants.TYPE_VALUE.BOTH:
        score += constants.SCORE.BOTH;
        break;
      default:
        throw new Error('This is not a valid type')
    }

    return score;
  }

  calculateColor(score){

  }
}

module.exports.BasicHabit = BasicHabit;
module.exports.Habit = Habit;
