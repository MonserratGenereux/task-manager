const c = require('./../constants.js');
const Stage = require('./Stage.js');

class BlueStage extends Stage{
  constructor(score){
    super(score);
    this.score = score;
    this.color = c.COLORS.BLUE;
  }

  getGoodMultiplier(difficulty){
    return (1/c.SCORE[c.DIFFICULTY[difficulty]]);
  }
}

module.exports = BlueStage;
