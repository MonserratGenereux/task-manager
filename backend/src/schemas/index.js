const accounts = require('./accounts');
const habits = require('./habits');
const reports = require('./reports');
const tasks = require('./tasks');

module.exports = Object.assign({}, accounts, habits, reports, tasks);
