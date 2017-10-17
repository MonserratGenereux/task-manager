const express = require('express');
const bodyParser = require('body-parser');
const HttpStatus = require('http-status-codes');


const router = express.Router();
router.use(bodyParser.urlencoded({ extended: true }));

/**
 * @swagger
 * /status/health:
 *   get:
 *     tags:
 *       - "status"
 *     summary: Health endpoint
 *     description: Returns OK if the app is still running
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: healthy
 *       500:
 *         description: app failure
 */
router.get('/health', (req, res) => {
  res.status(HttpStatus.OK).send('ok');
});

/**
 * @swagger
 * /status/ready:
 *   get:
 *     tags:
 *       - "status"
 *     summary: Ready endpoint
 *     description: Returns OK if all services needed are up and running and the system can work fine
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: ready
 *       500:
 *         description: system failure
 */
router.get('/ready', (req, res) => {
  res.status(HttpStatus.OK).send('ok');
});

module.exports = router;
