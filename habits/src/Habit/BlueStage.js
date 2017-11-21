const c = require('./../constants.js');
const Stage = require('./Stage.js');

class BlueStage extends Stage{
  constructor(){
    super(c.COLORS.BLUE);
  }

  getIncreaseForGood(difficulty){
    return 1;
  }
}

module.exports = BlueStage;
