const c = require('./../constants.js');
const Stage = require('./Stage.js');

class OrangeStage extends Stage{

  constructor(){
    super(c.COLORS.ORANGE);
  }

  getDecreaseForBad(difficulty){
    return c.SCORE[c.DIFFICULTY[difficulty]] * c.SCORE.ORANGE_DECREASE;
  }
}

module.exports = OrangeStage;
