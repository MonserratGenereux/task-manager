const c = require('./../constants.js');
const Stage = require('./Stage.js');

class GreenStage extends Stage{
  constructor(score){
    super(score);
    this.score = score;
    this.color = c.COLORS.GREEN;
  }

  getGoodMultiplier(difficulty){
    return c.SCORE.GREEN_INCREASE;
  }
}

module.exports = GreenStage;
