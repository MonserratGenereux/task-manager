const c = require('./../constants.js');
const RedStage    = require('./RedStage.js');
const OrangeStage = require('./OrangeStage.js');
const YellowStage = require('./YellowStage.js');
const GreenStage  = require('./GreenStage.js');

class BlueStage{
  constructor(score){
    this.score = score;
    this.color = c.COLORS.BLUE;
  }

  getGoodMultiplier(difficulty){
    return (1/c.SCORE[c.DIFFICULTY[difficulty]]);
  }

  getBadMultiplier(difficulty){
    return 1;
  }

  forStage(score){
      if(score <           c.COLOR_RANGES.RED_UPPER_LIM){
        return new RedStage(score);
      }else if(score >     c.COLOR_RANGES.ORANGE_LOWER_LIM
              && score <=  c.COLOR_RANGES.YELLOW_LOWER_LIM){
        return new OrangeStage(score);
      }else if(score >     c.COLOR_RANGES.YELLOW_LOWER_LIM
              && score <=  c.COLOR_RANGES.GREEN_LOWER_LIM){
        return new YellowStage(score);
      }else if(score >     c.COLOR_RANGES.GREEN_LOWER_LIM
              && score <=  c.COLOR_RANGES.BLUE_LOWER_LIM){
        return new GreenStage(score);
      }else if(score >     c.COLOR_RANGES.BLUE_LOWER_LIM){
        return new BlueStage(score);
      }
  }
}

module.exports = BlueStage;
