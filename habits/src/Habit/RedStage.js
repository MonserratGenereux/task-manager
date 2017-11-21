const c = require('./../constants.js');
const Stage = require('./Stage.js');

class RedStage extends Stage{
  constructor(score){
    super(score);
    this.score = score;
    this.color = c.COLORS.RED;
  }

  getBadMultiplier(difficulty){
    return c.SCORE.RED_DECREASE;
  }
}

module.exports = RedStage;
