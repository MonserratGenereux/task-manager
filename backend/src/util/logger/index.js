const getLogger = (loggerType) => {
  let logger; 
  try {
    logger = require("./" + loggerType);
  } catch(err) {
    throw new Error(`Unsuported logger "${loggerType}"`)
  }

  return logger;
}

module.exports = getLogger;