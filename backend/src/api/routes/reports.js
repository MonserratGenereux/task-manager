const express = require('express');
const bodyParser = require('body-parser');
const HttpStatus = require('http-status-codes');


const router = express.Router();
router.use(bodyParser.urlencoded({ extended: true }));

/**
 * @swagger
 * /reports:
 *   get:
 *     tags:
 *       - "reports"
 *     summary: Fetch reports
 *     description: Returns a report of the tasks and habit of the user
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: userId
 *         description: id of the user
 *         in: header
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: OK
 *         schema:
 *              $ref: "#/definitions/general_reports"
 *       400:
 *         description: invalid username
 */
router.get('/', (req, res) => {
  res.status(HttpStatus.OK).send('ok');
});

/**
 * @swagger
 * /report/tasks:
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
 *         in: header
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: OK
 *         schema:
 *           type: "array"
 *           items: {
 *              $ref: "#/definitions/task_reports"
 *           }
 *       400:
 *         description: invalid user
 */
router.get('/task', (req, res) => {
  res.status(HttpStatus.OK).send('ok');
});

/**
 * @swagger
 * /reports/habit:
 *   get:
 *     tags:
 *       - "reports"
 *     summary: Fetch habit report
 *     description: Returns report of the habit of all users
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: userId
 *         description: id of the user admin
 *         in: header
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: OK
 *         schema:
 *           type: "array"
 *           items: {
 *              $ref: "#/definitions/habit_reports"
 *           }
 *       400:
 *         description: invalid user
 */
router.get('/habit', (req, res) => {
  res.status(HttpStatus.OK).send('ok');
});

module.exports = router;
