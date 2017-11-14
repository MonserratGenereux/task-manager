class Response{
  constructor(succeded, error){
    this.succeded = (succeded ? succeded : false);
    this.error = (error ? error : 'No attributes for response');
  }

  getResponse(){
    return {
      succeded: this.succeded,
      error: this.error
    }
  }
}

module.exports = Response;
