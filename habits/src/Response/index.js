class Response{
  constructor(succeded, error){
    this.succeded = (succeded ? succeded : false);
    this.error = (error ? error : 'No attributes for response');
  }

  generate(){
    return {
      succeded: this.succeded,
      error: this.error
    }
  }
}

module.exports = Response;
