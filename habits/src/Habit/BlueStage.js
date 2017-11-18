var Stage = require('./Stage.js');
const c = require('./../constants.js');

class BlueStage extends Stage{
  constructor(score){
    super(score);
    this.color = c.COLORS.BLUE;
  }

  getGoodMultiplier(){
    return c.SCORE.BLUE_INCREASE;
  }

  getBadMultiplier(){
    return 1;
  }
}

module.exports = BlueStage;
