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
  res.status(HttpStatus.OK).send('ok');
});

/**
 * @swagger
 * /report/user:
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
 *       - name: user-id
 *         description: id of the user
 *         in: header
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
router.get('/task', (req, res) => {
  res.status(HttpStatus.OK).send('ok');
});
module.exports = router;
