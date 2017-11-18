var Stage = require('./index.js');
const c = require('./../constants.js');

console.log("STAGE:" , Stage );

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
