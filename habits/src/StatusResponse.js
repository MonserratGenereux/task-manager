class StatusResponse{
  constructor(succeded, habitId, error){
    this.succeded = succeded;
    this.habitId = habitId;
    this.error = error;
  }

  getStatusResponse(){
    return{
      succeded: this.succeded,
      habitId: this.habitId,
      error: this.error
    }
  }
}

module.exports = StatusResponse;
