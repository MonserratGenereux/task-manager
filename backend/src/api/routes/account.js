const express = require('express');
const bodyParser = require('body-parser');
const HttpStatus = require('http-status-codes');


const router = express.Router();
router.use(bodyParser.urlencoded({ extended: true }));

/**
 * @swagger
 * /account/{username}:
 *   get:
 *     tags:
 *       - "account"
 *     summary: Fetch user
 *     description: Returns the id of a existing user given the username
 *     consumes:
 *       - application/json
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: username
 *         description: Username of the account to delete
 *         in: path
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: user id
 *       400:
 *         description: invalid username
 */
router.get('/', (req, res) => {
  res.status(HttpStatus.OK).send('ok');
});

/**
 * @swagger
 * /account:
 *   post:
 *     tags:
 *       - "account"
 *     summary: Create new account
 *     description: Create new account
 *     consumes:
 *       - application/json
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: username
 *         description: Username to use for login.
 *         in: body
 *         required: true
 *         type: string
 *       - name: password
 *         description: User's password.
 *         in: body
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: user created
 *       500:
 *         description: server error
 */
router.post('/', (req, res) => {
  res.status(HttpStatus.OK).send('ok');
});

/**
 * @swagger
 * /account:
 *   patch:
 *     tags:
 *       - "account"
 *     summary: Update existing account
 *     description: Update existing account
 *     consumes:
 *       - application/json
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: username
 *         description: Username to use for login.
 *         in: body
 *         required: true
 *         type: string
 *       - name: password
 *         description: User's password.
 *         in: body
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: user created
 *       500:
 *         description: server error
 */
router.patch('/', (req, res) => {
  res.status(HttpStatus.OK).send('ok');
});

/**
 * @swagger
 * /account:
 *   delete:
 *     tags:
 *       - "account"
 *     summary: Delete account
 *     description: Delete account
 *     consumes:
 *       - application/json
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: username
 *         description: Username of the account to delete
 *         in: body
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: user deleted
 *       500:
 *         description: server error
 */
router.delete('/', (req, res) => {
  res.status(HttpStatus.OK).send('ok');
});

module.exports = router;
