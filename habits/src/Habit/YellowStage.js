const c = require('./../constants.js');
const Stage = require('./Stage.js');

class YellowStage extends Stage{
  constructor(){
    super(c.COLORS.YELLOW);
  }
}

module.exports = YellowStage;
