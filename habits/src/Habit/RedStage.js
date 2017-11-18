const Stage = require('./Stage');
const c = require('./../constants.js');

class RedStage extends Stage{
  constructor(score){
    super(score);
    this.color = c.COLORS.RED;
  }

  getGoodMultiplier(){
    return 1;
  }

  getBadMultiplier(){
    return c.SCORE.ORANGE_DECREASE;
  }
}

module.exports = RedStage;
