const expect = require("chai").expect;
const Habit = require('./../Habit');
var data_create = {
  _id: "1",
  userId: '1',
  name: 'Juancho',
  description: 'Descripcion',
  good: true,
  bad: false,
  difficulty: '2'
}
var habit_create = new Habit(data_create);


describe("Habit class", ()=>{

  describe("Method getCopy()",()=>{
    context("When Creating new Habit",()=>{
      var getCopy = habit_create.getCopy();
      it("Has _id attribute",()=>{
        expect(getCopy).to.have.property('_id');
      })
      it("_id attribute should be ...",()=>{
        expect(getCopy._id).to.equal("1");
      })
      it("Has userId attribute",()=>{
        expect(getCopy).to.have.property('userId');
      })
      it("userId attribute should be ...",()=>{
        expect(getCopy.userId).to.equal("1");
      })
      it("Has name attribute",()=>{
        expect(getCopy).to.have.property('name');
      })
      it("name attribute should be ...",()=>{
        expect(getCopy.name).to.equal("Juancho");
      })
      it("Has description attribute",()=>{
        expect(getCopy).to.have.property('description');
      })
      it("description attribute should be ...",()=>{
        expect(getCopy.description).to.equal("Descripcion");
      })
      it("Has good attribute",()=>{
        expect(getCopy).to.have.property('good');
      })
      it("good attribute should be ...",()=>{
        expect(getCopy.good).to.true;
      })
      it("Has bad attribute",()=>{
        expect(getCopy).to.have.property('bad');
      })
      it("bad attribute should be ...",()=>{
        expect(getCopy.bad).to.false;
      })
      it("Has difficulty attribute",()=>{
        expect(getCopy).to.have.property('difficulty');
      })
      it("difficulty attribute should be ...",()=>{
        expect(getCopy.difficulty).to.equal("2");
      })
      it("Has score attribute",()=>{
        expect(getCopy).to.have.property('score');
      })
      it("score attribute should be ...",()=>{
        expect(getCopy.score).to.equal(0);
      })
      it("Has color attribute",()=>{
        expect(getCopy).to.have.property('color');
      })
      it("color attribute should be ...",()=>{
        expect(getCopy.color).to.equal("ORANGE");
      })
    });
  });
  describe("Method getCopyForUpdate()",()=>{
    context("When creating a new Habit", ()=>{
      var getCopyForUpdate = habit_create.getCopyForUpdate();
      it("Has name attribute",()=>{
        expect(getCopyForUpdate).to.have.property('name');
      })
      it("name attribute should be ...",()=>{
        expect(getCopyForUpdate.name).to.equal("Juancho");
      })
      it("Has description attribute",()=>{
        expect(getCopyForUpdate).to.have.property('description');
      })
      it("description attribute should be ...",()=>{
        expect(getCopyForUpdate.description).to.equal("Descripcion");
      })
      it("Has good attribute",()=>{
        expect(getCopyForUpdate).to.have.property('good');
      })
      it("good attribute should be ...",()=>{
        expect(getCopyForUpdate.good).to.true;
      })
      it("Has bad attribute",()=>{
        expect(getCopyForUpdate).to.have.property('bad');
      })
      it("bad attribute should be ...",()=>{
        expect(getCopyForUpdate.bad).to.false;
      })
      it("Has difficulty attribute",()=>{
        expect(getCopyForUpdate).to.have.property('difficulty');
      })
      it("difficulty attribute should be ...",()=>{
        expect(getCopyForUpdate.difficulty).to.equal("2");
      })
    });
  });
});
