var Stage = require('./Stage.js');
const c = require('./../constants.js');

class OrangeStage extends Stage{
  constructor(score){
    super(score);
    this.color = c.COLORS.ORANGE;
  }

  getGoodMultiplier(){
    return 1;
  }

  getBadMultiplier(){
    return c.SCORE.RED_DECREASE;
  }
}

module.exports = OrangeStage;
