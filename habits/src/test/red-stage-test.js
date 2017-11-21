const RedStage = require('./../Habit/RedStage.js');
const expect = require("chai").expect;
const c = require('./../constants.js')
var stage = new RedStage(c.COLORS.RED);

describe("RedStage class", ()=>{
  context("when it's an EASY Habit (0)", ()=>{
    it("should increase score by ...", ()=>{
      expect(stage.getIncreaseForGood("0")).to.equal(2);
    })
    it("should decrease score by ...", ()=>{
      expect(stage.getDecreaseForBad("0")).to.equal(4);
    })
  });
  context("when it's an MEDIUM Habit (1)", ()=>{
    it("should increase score by ...", ()=>{
      expect(stage.getIncreaseForGood("1")).to.equal(4);
    })
    it("should decrease score by ...", ()=>{
      expect(stage.getDecreaseForBad("1")).to.equal(8);
    })
  });
  context("when it's an HARD Habit (2)", ()=>{
    it("should decrease score by ...", ()=>{
      expect(stage.getIncreaseForGood("2")).to.equal(6);
    })
    it("should decrease score by ...", ()=>{
      expect(stage.getDecreaseForBad("2")).to.equal(12);
    })
  });
})
