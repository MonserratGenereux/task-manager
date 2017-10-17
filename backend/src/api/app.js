const express = require('express');
const swaggerUi = require('swagger-ui-express');

const swaggerSpec = require('./swagger');
const accountController = require('./routes/account');
const habitController = require('./routes/habit');
const reportController = require('./routes/report');
const taskController = require('./routes/task');
const statusController = require('./routes/status');


const app = express();

app.use('/account', accountController);
app.use('/habit', habitController);
app.use('/report', reportController);
app.use('/task', taskController);
app.use('/status', statusController);
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

module.exports = app;
