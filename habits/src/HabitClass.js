const constants = require("./constants");
class BasicHabit{
  constructor(request){
    this.request =      request;
    this._id =          (request._id ? request._id.toString() : undefined);
    this.userId =       (request.userId ? request.userId : '');
    this.name =         (request.name ? request.name : '');
    this.description =  (request.description ? request.description : '');
    this.good =         request.good;
    this.bad =          request.bad;
    this.difficulty =   (request.difficulty ? request.difficulty : '');
    this.score =        this.calculateScore();
    this.color =        this.calculateColor();
  }

  validType(){
    return this.good || this.bad;
  }

  calculateScore(){
    return 0;
  }

  calculateColor(){
    return constants.COLORS.ORANGE;
  }

  getId(){
    return this._id.toString();
  }

  getHabit(){
    return {
      _id: this._id,
      userId: this.userId,
      name: this.name,
      description: this.description,
      good: this.good,
      bad: this.bad,
      difficulty: this.difficulty,
      score: this.score,
      color: this.color
    }
  }
}



module.exports.BasicHabit = BasicHabit;
