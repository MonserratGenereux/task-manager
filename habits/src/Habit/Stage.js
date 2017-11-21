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
}

module.exports = Stage;
