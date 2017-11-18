var Stage = require('./Stage.js');
const c = require('./../constants.js');

class YellowStage extends Stage{
  constructor(score){
    super(score);
    this.color = c.COLORS.YELLOW;
  }

  getGoodMultiplier(){
    return 1;
  }

  getBadMultiplier(){
    return 1;
  }
}

module.exports = YellowStage;
