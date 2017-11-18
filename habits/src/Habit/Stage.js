const RedStage = require('./RedStage');
const YellowStage = require('./YellowStage');
const GreenStage = require('./GreenStage');
const BlueStage = require('./BlueStage');
const OrangeStage = require('./OrangeStage');
const c = require('./../constants.js');

class Stage{
  constructor(score){
    this.score = score;
    this.color;
  }

  getGoodMultiplier(){
    return 1;
  }

  getBadMultiplier(){
    return -1;
  }

  forScore(score){
    if(score <           constants.COLOR_RANGES.RED_UPPER_LIM){
      return new RedStage(score);
    }else if(score >     constants.COLOR_RANGES.ORANGE_LOWER_LIM
            && score <=  constants.COLOR_RANGES.YELLOW_LOWER_LIM){
      return new OrangeStage(score);
    }else if(score >     constants.COLOR_RANGES.YELLOW_LOWER_LIM
            && score <=  constants.COLOR_RANGES.GREEN_LOWER_LIM){
      return new YellowStage(score);
    }else if(score >     constants.COLOR_RANGES.GREEN_LOWER_LIM
            && score <=  constants.COLOR_RANGES.BLUE_LOWER_LIM){
      return new GreenStage(score);
    }else if(score >     constants.COLOR_RANGES.BLUE_LOWER_LIM){
      return new BlueStage(score);
    }
  }
}

module.exports = Stage;
