const account = require('./account');
const habit = require('./habit');
const report = require('./report');
const task = require('./task');

module.exports = Object.assign({}, account, habit, report, task);
