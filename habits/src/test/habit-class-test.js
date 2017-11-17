const assert = require("chai").assert;
const expect = require("chai").expect;
const data = require('./test-variables.js');
const c = require('./../constants.js')
var keys = Object.keys(data);
console.log("DATA: ", keys);
console.log("DATA: ", keys.length);
var Habit = require('./../Habit');

describe("Habit: ", function () {
  var basic_habit   = new Habit(data.default_data);
  describe("Checking Correct data for Habits creation... ", function() {
    it("Check userId property", function() {
      expect(basic_habit.getCopy()).to.have.property('userId')
      assert.equal(basic_habit.getCopy().userId, '1');
      assert.typeOf(basic_habit.getCopy().userId, 'string');
    });
    it("Check name property", function() {
      expect(basic_habit.getCopy()).to.have.property('name')
      assert.equal(basic_habit.getCopy().name, 'Juancho');
      assert.typeOf(basic_habit.getCopy().name, 'string');
    });
    it("Check description property", function() {
      expect(basic_habit.getCopy()).to.have.property('description')
      assert.equal(basic_habit.getCopy().description, 'Descripcion');
      assert.typeOf(basic_habit.getCopy().description, 'string');
    });
    it("Check good property", function() {
      expect(basic_habit.getCopy()).to.have.property('good')
      assert.equal(basic_habit.getCopy().good, true);
      assert.typeOf(basic_habit.getCopy().good, 'boolean');
    });
    it("Check bad property", function() {
      expect(basic_habit.getCopy()).to.have.property('bad')
      assert.equal(basic_habit.getCopy().bad, false);
      assert.typeOf(basic_habit.getCopy().bad, 'boolean');
    });
    it("Check score property", function() {
      expect(basic_habit.getCopy()).to.have.property('score')
      assert.equal(basic_habit.getCopy().score, 0);
      assert.typeOf(basic_habit.getCopy().score, 'number');
    });
    it("Check difficulty property", function() {
      expect(basic_habit.getCopy()).to.have.property('difficulty')
      assert.equal(basic_habit.getCopy().difficulty, '2');
      assert.typeOf(basic_habit.getCopy().difficulty, 'string');
    });
    it("Check color property", function() {
      expect(basic_habit.getCopy()).to.have.property('color')
      assert.equal(basic_habit.getCopy().color, 'ORANGE');
      assert.typeOf(basic_habit.getCopy().color , 'string');
    });
  });

  describe("Checking Update Score Algorithm for EASY RED in RANGE... ", function() {
    it("GOOD EASY RED Habit Marked as Good", function() {
      GOOD_EASY_RED   = new Habit(data.GOOD_EASY_RED);
      GOOD_EASY_RED.updateScore(true, false);
      expect(GOOD_EASY_RED.getScoreUpdate()).to.have.property('color')
      expect(GOOD_EASY_RED.getScoreUpdate()).to.have.property('score')
      assert.equal(GOOD_EASY_RED.getScoreUpdate().color, c.COLORS.RED);
      assert.equal(GOOD_EASY_RED.getScoreUpdate().score, data.GOOD_EASY_RED.score + c.SCORE.EASY);
      assert.typeOf(GOOD_EASY_RED.getScoreUpdate().color, 'string');
      assert.typeOf(GOOD_EASY_RED.getScoreUpdate().score, 'number');
    });
    // it("GOOD EASY RED Habit Marked as Bad", function() {
    //   habit   = new Habit(data.GOOD_EASY_RED);
    //   expect(habit.getCopy()).to.have.property('userId')
    //   assert.equal(habit.getCopy().userId, '1');
    //   assert.typeOf(habit.getCopy().userId, 'string');
    // });
    it("BAD EASY RED Habit Marked as Bad", function() {
      BAD_EASY_RED   = new Habit(data.BAD_EASY_RED);
      BAD_EASY_RED.updateScore(false, true);
      expect(BAD_EASY_RED.getScoreUpdate()).to.have.property('color')
      expect(BAD_EASY_RED.getScoreUpdate()).to.have.property('score')
      assert.equal(BAD_EASY_RED.getScoreUpdate().color, c.COLORS.RED);
      assert.equal(BAD_EASY_RED.getScoreUpdate().score, data.BAD_EASY_RED.score - c.SCORE.EASY * 2);
      assert.typeOf(BAD_EASY_RED.getScoreUpdate().color, 'string');
      assert.typeOf(BAD_EASY_RED.getScoreUpdate().score, 'number');
    });
    // it("BAD EASY RED Habit Marked as Good", function() {
    //   habit   = new Habit(data.BAD_EASY_RED);
    //   expect(habit.getCopy()).to.have.property('userId')
    //   assert.equal(habit.getCopy().userId, '1');
    //   assert.typeOf(habit.getCopy().userId, 'string');
    // });
    it("BOTH EASY RED Habit Marked as good", function() {
      BOTH_EASY_RED   = new Habit(data.BOTH_EASY_RED);
      BOTH_EASY_RED.updateScore(true, false);
      expect(BOTH_EASY_RED.getScoreUpdate()).to.have.property('color')
      expect(BOTH_EASY_RED.getScoreUpdate()).to.have.property('score')
      assert.equal(BOTH_EASY_RED.getScoreUpdate().color, c.COLORS.RED);
      assert.equal(BOTH_EASY_RED.getScoreUpdate().score, data.BOTH_EASY_RED.score + c.SCORE.EASY);
      assert.typeOf(BOTH_EASY_RED.getScoreUpdate().color, 'string');
      assert.typeOf(BOTH_EASY_RED.getScoreUpdate().score, 'number');
    });
    it("BOTH EASY RED Habit Marked as Bad", function() {
      BOTH_EASY_RED   = new Habit(data.BOTH_EASY_RED);
      BOTH_EASY_RED.updateScore(false, true);
      expect(BOTH_EASY_RED.getScoreUpdate()).to.have.property('color')
      expect(BOTH_EASY_RED.getScoreUpdate()).to.have.property('score')
      assert.equal(BOTH_EASY_RED.getScoreUpdate().color, c.COLORS.RED);
      assert.equal(BOTH_EASY_RED.getScoreUpdate().score, data.BOTH_EASY_RED.score - c.SCORE.EASY * 2);
      assert.typeOf(BOTH_EASY_RED.getScoreUpdate().color, 'string');
      assert.typeOf(BOTH_EASY_RED.getScoreUpdate().score, 'number');
    });
  });
});
