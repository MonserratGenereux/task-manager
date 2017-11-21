const c = require('./../constants.js');
const Stage = require('./Stage.js');

class OrangeStage extends Stage{
  constructor(score){
    super(score);
    this.score = score;
    this.color = c.COLORS.ORANGE;
  }

  getBadMultiplier(difficulty){
    return c.SCORE.ORANGE_DECREASE;
  }
}

module.exports = OrangeStage;
