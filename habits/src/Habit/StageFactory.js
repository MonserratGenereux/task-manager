const RedStage    = require('./RedStage.js');
const OrangeStage = require('./OrangeStage.js');
const YellowStage = require('./YellowStage.js');
const GreenStage  = require('./GreenStage.js');
const BlueStage  = require('./BlueStage.js');
const c = require('./../constants.js');


class StageFactory{

  static stageFor(score){
      if(score <           c.COLOR_RANGES.RED_UPPER_LIM){
        return new RedStage();
      }else if(score >=    c.COLOR_RANGES.ORANGE_LOWER_LIM
              && score <=  c.COLOR_RANGES.YELLOW_LOWER_LIM){
        return new OrangeStage();
      }else if(score >     c.COLOR_RANGES.YELLOW_LOWER_LIM
              && score <=  c.COLOR_RANGES.GREEN_LOWER_LIM){
        return new YellowStage();
      }else if(score >     c.COLOR_RANGES.GREEN_LOWER_LIM
              && score <=  c.COLOR_RANGES.BLUE_LOWER_LIM){
        return new GreenStage();
      }else if(score >     c.COLOR_RANGES.BLUE_LOWER_LIM){
        return new BlueStage();
      }
  }
}

module.exports = StageFactory;
