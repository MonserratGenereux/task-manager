const config = require('config');

const Logger = require('./util/logger');
const app = require('./api/app');

const logger = Logger(config.get('logger'));

// Start API server
const host = config.get('server.host');
const port = config.get('server.port');
const server = app.listen(port, host, () => {
  logger.info('Task Manager backend server listening on port: ' + port);
});
