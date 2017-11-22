const c = require('./../constants.js');
const Stage = require('./Stage.js');

class RedStage extends Stage{

  constructor(){
    super(c.COLORS.RED);
  }

  getDecreaseForBad(difficulty){
    return c.SCORE[c.DIFFICULTY[difficulty]] * c.SCORE.RED_DECREASE;
  }
}

module.exports = RedStage;
