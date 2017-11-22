const expect = require("chai").expect;
const StageFactory = require('./../Habit/StageFactory.js');
const RedStage = require('./../Habit/RedStage.js');
const OrangeStage = require('./../Habit/OrangeStage.js');
const YellowStage = require('./../Habit/YellowStage.js');
const GreenStage = require('./../Habit/GreenStage.js');
const BlueStage = require('./../Habit/BlueStage.js');

var score = -1;

describe("StageFactory",()=>{
  context("when score is less than 0", () =>{
    var stage = StageFactory.stageFor(-1);
    it("should create a RedStage Class", ()=>{
      expect(stage instanceof RedStage).to.be.true;
    });
    it("should be Red color", ()=>{
      expect(stage.color).to.equal('RED');
    });
  });
  context("when score is between 0 and 10",()=> {
    var stage = StageFactory.stageFor(0);
    it("should create a OrangeStage Class", ()=>{
      expect(stage instanceof OrangeStage).to.be.true;
    });
    it("should be Orage color", ()=>{
      expect(stage.color).to.equal('ORANGE');
    });
  });
  context("when score is between 11 and 40",()=> {
    var stage = StageFactory.stageFor(15);
    it("should create a YellowStage Class", ()=>{
      expect(stage instanceof YellowStage).to.be.true;
    });
    it("should be Yellow color", ()=>{
      expect(stage.color).to.equal('YELLOW');
    });
  });
  context("when score is between 41 and 50",()=> {
    var stage = StageFactory.stageFor(45);
    it("should create a GreenStage Class", ()=>{
      expect(stage instanceof GreenStage).to.be.true;
    });
    it("should be GREEN color", ()=>{
      expect(stage.color).to.equal('GREEN');
    });
  });
  context("when score is greater than 51",()=> {
    var stage = StageFactory.stageFor(54);
    it("should create a BlueStage Class", ()=>{
      expect(stage instanceof BlueStage).to.be.true;
    });
    it("should be Blue color", ()=>{
      expect(stage.color).to.equal('BLUE');
    });
  });

});
