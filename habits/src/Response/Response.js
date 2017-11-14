class Response{
  constructor(succeded, error){
    this.succeded = (succeded ? succeded : false);
    this.error = (error ? error : 'No attributes for response');
  }
  //
  // get succeded(){
  //   return succeded;
  // }
  //
  // set succeded(succeded){
  //   this.succeded = succeded;
  // }

  // get error(){
  //   return error;
  // }
  //
  // set error(error){
  //   this.error = error;
  // }

  getResponse(){
    return {
      succeded: this.succeded,
      error: this.error
    }
  }
}

module.exports = Response;
