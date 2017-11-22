const express = require('express');
const bodyParser = require('body-parser');
const HttpStatus = require('http-status-codes');

const reportsClient = require('../../clients/reports');
const reports = require('../../../proto/reports/reports_pb');

const router = express.Router();
router.use(bodyParser.urlencoded({ extended: true }));

/**
 * @swagger
 * /reports:
 *   get:
 *     tags:
 *       - "reports"
 *     summary: Fetch reports
 *     description: Returns a report of the tasks and habit of all the users
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: user-id
 *         description: id of the user
 *         in: header
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: OK
 *         schema:
 *              $ref: "#/definitions/admin_reports"
 *       400:
 *         description: invalid username
 */
router.get('/', (req, res) => {
  Promise.all([
    reportsClient.getHabitsReport(new reports.Empty()),
    reportsClient.getTasksReport(new reports.Empty()),
  ])
  .then(reportResults => {
    res.status(HttpStatus.OK).send({
      habits: reportResults[0].toObject(),
      tasks: reportResults[1].toObject(),
    });
  })
  .catch( err => {
    res.status(HttpStatus.INTERNAL_SERVER_ERROR).send(err.message);
  });
});

/**
 * @swagger
 * /reports/{userId}:
 *   get:
 *     tags:
 *       - "reports"
 *     summary: Fetch task report
 *     description: Returns report of the task of all users
 *     consumes:
 *       - application/json
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: userId
 *         description: id of the user
 *         in: path
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: OK
 *         schema:
 *              $ref: "#/definitions/user_reports"
 *       400:
 *         description: invalid user
 */
router.get('/:userId', (req, res) => {
  const id = new reports.AccountID({id: req.params.userId});
  Promise.all([
    reportsClient.getHabitsUserReport(id),
    reportsClient.getTasksUserReport(id),
  ])
  .then(reportResults => {
    res.status(HttpStatus.OK).send({
      habits: reportResults[0].toObject(),
      tasks: reportResults[1].toObject(),
    });
  })
  .catch( err => {
    res.status(HttpStatus.INTERNAL_SERVER_ERROR).send(err.message);
  });
});
module.exports = router;
