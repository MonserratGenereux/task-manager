const c = require('./../constants.js');

class Stage{

  constructor(color){
    this.color = color;
  }

  getIncreaseForGood(difficulty){
    return c.SCORE[c.DIFFICULTY[difficulty]];
  }

  getDecreaseForBad(difficulty){
    return c.SCORE[c.DIFFICULTY[difficulty]];
  }
}

module.exports = Stage;
