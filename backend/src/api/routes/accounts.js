const express = require('express');
const bodyParser = require('body-parser');
const HttpStatus = require('http-status-codes');
const accountsClient = require('../../clients/accounts');

const router = express.Router();
router.use(bodyParser.urlencoded({ extended: true }));

/**
 * @swagger
 * /accounts/{username}:
 *   get:
 *     tags:
 *       - "accounts"
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
 *         description: OK
 *         schema:
 *           $ref: "#/definitions/accounts"
 *       400:
 *         description: invalid username
 */
router.get('/:username', (req, res) => {
  accountsClient.getAccountByUsername({username: req.params.username})
  .then(account => {
    res.status(HttpStatus.OK).send(account);
  })
  .catch( err => {
    console.error(err);
    res.status(HttpStatus.INTERNAL_SERVER_ERROR).send(err.message);
  });
});

/**
 * @swagger
 * /accounts:
 *   post:
 *     tags:
 *       - "accounts"
 *     summary: Create new account
 *     description: Create new account
 *     consumes:
 *       - application/json
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: account
 *         description: Account information
 *         in: body
 *         required: true
 *         schema:
 *           $ref: "#/definitions/accounts"
 *     responses:
 *       200:
 *         description: OK
 *       500:
 *         description: server error
 */
router.post('/', (req, res) => {
  console.log(req.body);
  const newAccount = req.body.account;
  accountsClient.createAccount({
    username: newAccount.username,
    email: newAccount.email,
    password: newAccount.password,
  })
  .then(statusResponse => {
    if (statusResponse.error) {
      console.log(statusResponse.error);
      res.status(HttpStatus.INTERNAL_SERVER_ERROR);
    }
    res.status(HttpStatus.OK).send(statusResponse);
  })
  .catch( err => {
    console.error(err);
    res.status(HttpStatus.INTERNAL_SERVER_ERROR).send(err.message);
  });
});

/**
 * @swagger
 * /accounts:
 *   patch:
 *     tags:
 *       - "accounts"
 *     summary: Update existing account
 *     description: Update existing account
 *     consumes:
 *       - application/json
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: account
 *         description: Account information
 *         in: body
 *         required: true
 *         schema:
 *           $ref: "#/definitions/accounts"
 *     responses:
 *       200:
 *         description: user created
 *       500:
 *         description: server error
 */
router.patch('/', (req, res) => {
  accountsClient.updateAccount(req.body.account)
  .then(statusResponse => {
    if (statusResponse.error) {
      console.log(statusResponse.error);
      res.status(HttpStatus.INTERNAL_SERVER_ERROR);
    }
    res.status(HttpStatus.OK).send(statusResponse);
  })
  .catch( err => {
    console.error(err);
    res.status(HttpStatus.INTERNAL_SERVER_ERROR).send(err.message);
  });
});

/**
 * @swagger
 * /accounts:
 *   delete:
 *     tags:
 *       - "accounts"
 *     summary: Delete account
 *     description: Delete account
 *     consumes:
 *       - application/json
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         description: Id of the account to be deleted
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
  console.log(req.body.id);
  accountsClient.deleteAccount({id: req.body.id})
  .then(statusResponse => {
    if (statusResponse.error) {
      console.log(statusResponse.error);
      res.status(HttpStatus.INTERNAL_SERVER_ERROR);
    }
    res.status(HttpStatus.OK).send(statusResponse);
  })
  .catch( err => {
    console.error(err);
    res.status(HttpStatus.INTERNAL_SERVER_ERROR).send(err.message);
  });
});

module.exports = router;
