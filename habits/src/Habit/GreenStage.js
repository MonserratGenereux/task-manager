const c = require('./../constants.js');
const Stage = require('./Stage.js');

class GreenStage extends Stage{
  constructor(){
    super(c.COLORS.GREEN);
  }

  getIncreaseForGood(difficulty){
    return c.SCORE[c.DIFFICULTY[difficulty]] * c.SCORE.GREEN_INCREASE;
  }
}

module.exports = GreenStage;
