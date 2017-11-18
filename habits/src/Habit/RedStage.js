const c = require('./../constants.js');
const OrangeStage = require('./OrangeStage.js');
const YellowStage = require('./YellowStage.js');
const GreenStage  = require('./GreenStage.js');
const BlueStage   = require('./BlueStage.js');

class RedStage{
  constructor(score){
    this.score = score;
    this.color = c.COLORS.RED;
  }

  getGoodMultiplier(difficulty){
    return 1;
  }

  getBadMultiplier(difficulty){
    return c.SCORE.RED_DECREASE;
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

module.exports = RedStage;
