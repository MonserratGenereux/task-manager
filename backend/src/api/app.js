const express = require('express');
const config = require('config');
const cors = require('cors');
const morgan = require('morgan');
const bodyParser = require('body-parser')
const swaggerUi = require('swagger-ui-express');

const Logger = require('../util/logger');

const swaggerSpec = require('./swagger');
const accountController = require('./routes/accounts');
const habitController = require('./routes/habits');
const reportController = require('./routes/reports');
const taskController = require('./routes/tasks');
const statusController = require('./routes/status');


const app = express();

const logger = Logger(config.get('logger'));

app.use(bodyParser.json());
app.use(morgan("combined", { "stream": logger.stream }));

app.use(cors());
app.use(bodyParser.json());
app.use(morgan('dev'))
app.use('/accounts', accountController);
app.use('/habits', habitController);
app.use('/reports', reportController);
app.use('/tasks', taskController);
app.use('/status', statusController);
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

module.exports = app;
