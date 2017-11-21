const constants = require("./../constants");
const StageFactory = require('./StageFactory.js');
const eventPublisher = require('../EventPublisher');

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
    // this.color =        (data.color ? data.color : constants.COLORS.ORANGE);
    this.stage =        StageFactory.stageFor(this.score);
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
    habit.color = this.stage.color;

    return habit;
  }

  updateGoodStage(){
    //var multiplier = this.stage.getGoodMultiplier(this.difficulty);
    //this.score += constants.SCORE[constants.DIFFICULTY[this.difficulty]] * multiplier;
    this.score += this.stage.getIncreaseForGood(this.difficulty);
    this.stage = StageFactory.stageFor(this.score);
  }

  updateBadStage(){
    // var multiplier = this.stage.getBadMultiplier(this.difficulty);
    // this.score -= constants.SCORE[constants.DIFFICULTY[this.difficulty]] * multiplier;
    this.score -= this.stage.getDecreaseForBad(this.difficulty);
    this.stage = StageFactory.stageFor(this.score);
  }

  getColor(){
    return this.stage.color;
  }

  getScoreType(){
    return constants.SCORE[constants.DIFFICULTY[this.difficulty]];
  }

  getScoreUpdate(){
    return {
      color: this.stage.color,
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

  publishChanges() {
    eventPublisher.publish(this.getCopy());
  }
}

module.exports = Habit;
