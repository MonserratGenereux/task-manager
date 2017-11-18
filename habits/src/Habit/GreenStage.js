const Stage = require('./Stage');
const c = require('./../constants.js');

class GreenStage extends Stage{
  constructor(score){
    super(score);
    this.color = c.COLORS.GREEN;
  }

  getGoodMultiplier(){
    return c.SCORE.GREEN_INCREASE;
  }

  getBadMultiplier(){
    return 1;
  }
}

module.exports = GreenStage;
