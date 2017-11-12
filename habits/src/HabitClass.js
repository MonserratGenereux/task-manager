const constants = require("./constants");
class BasicHabit{
  constructor(request){
    this.request =      request;
    this._id =          (request._id ? request._id.toString() : undefined);
    this.userId =       (request.userId ? request.userId : '');
    this.name =         (request.name ? request.name : '');
    this.description =  (request.description ? request.description : '');
    this.type =         (request.type ? request.type : '');
    this.difficulty =   (request.difficulty ? request.difficulty : '');
    this.score =        this.calculateScore();
    this.color =        this.calculateColor();
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
      type: this.type,
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

  getHabitUpdate(){
    return {
      name: this.name,
      description: this.description,
      type: this.type,
      difficulty: this.difficulty
    }
  }

  // set name(newName){
  //   this.name = newName;
  // }
  //
  // set description(newDescription){
  //   this.description = newDescription;
  // }
  //
  // set name(newName){
  //   this.name = newName;
  // }
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
    var color = '';
    if(score < 0){
      color = constants.COLORS.RED;
    }else if(score > 0 && score <= 10){
      color = constants.COLORS.ORANGE;
    }else if(score > 10 && score <= 40){
      color = constants.COLORS.YELLOW;
    }else if(score > 40 && score <= 50){
      color = constants.COLORS.GREEN;
    }else if(score > 50){
      color = constants.COLORS.BLUE;
    }
    return color;
  }
}

module.exports.BasicHabit = BasicHabit;
module.exports.Habit = Habit;
