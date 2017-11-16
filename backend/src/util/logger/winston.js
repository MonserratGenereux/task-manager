const winston = require('winston');

const logger = new winston.Logger({
  transports: [
      new winston.transports.Console({
          level: 'debug',
          // handleExceptions: true,
          json: false,
          colorize: true
      })
  ],
  // exitOnError: false
})

logger.stream = {
  write: function(message, encoding){
    logger.info(message.trim());
  }
};

module.exports = logger;
