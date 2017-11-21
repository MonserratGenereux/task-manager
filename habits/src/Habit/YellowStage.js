const c = require('./../constants.js');
const Stage = require('./Stage.js');

class YellowStage extends Stage{
  constructor(score){
    super(score);
    this.score = score;
    this.color = c.COLORS.YELLOW;
  }
}

module.exports = YellowStage;
