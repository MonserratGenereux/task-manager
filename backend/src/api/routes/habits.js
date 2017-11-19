const express = require('express');
const bodyParser = require('body-parser');
const HttpStatus = require('http-status-codes');


const router = express.Router();
router.use(bodyParser.urlencoded({ extended: true }));

/**
 * @swagger
 * /habits:
 *   get:
 *     tags:
 *       - "habits"
 *     summary: Fetch habits
 *     description: Returns all habits available for the user
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
 *              $ref: "#/definitions/habits"
 *           }
 *       400:
 *         description: invalid username
 */
router.get('/', (req, res) => {
  res.status(HttpStatus.OK).send('ok');
});

/**
 * @swagger
 * /habits/{habitId}:
 *   get:
 *     tags:
 *       - "habits"
 *     summary: Fetch habit
 *     description: Returns specified habit
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: user Id
 *         description: id of the user
 *         in: header
 *         required: true
 *         type: string
 *       - name: habitId
 *         description: id of the habit
 *         in: path
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: OK
 *         schema:
 *           $ref: "#/definitions/habits"
 *       400:
 *         description: invalid habit
 */
router.get('/:habitId', (req, res) => {
  res.status(HttpStatus.OK).send({
  "succeded": true,
  "habits": [
    {
      "_id": "5a10def5decd7c0010b5b85f",
      "userId": "1",
      "name": "ewfnkjnkjf",
      "description": "f3k4f3",
      "good": true,
      "bad": true,
      "difficulty": "0",
      "score": 0,
      "color": "ORANGE"
    },
    {
      "_id": "5a10fa60decd7c0010b5b860",
      "userId": "1",
      "name": "habit2",
      "description": "f3k4fwf",
      "good": false,
      "bad": true,
      "difficulty": "0",
      "score": 0,
      "color": "ORANGE"
    }
  ],
  "error": ""
});
});

/**
 * @swagger
 * /habits:
 *   post:
 *     tags:
 *       - "habits"
 *     summary: Create new habit
 *     description: Create new habit
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: userId
 *         description: id of the user
 *         in: header
 *         required: true
 *         type: string
 *       - name: habit
 *         description: info of the newly create habit
 *         in: body
 *         required: true
 *         schema:
 *           $ref: "#/definitions/habits"
 *     responses:
 *       200:
 *         description: OK
 *       400:
 *         description: server error
 */
router.post('/', (req, res) => {
  res.status(HttpStatus.OK).send('ok');
});

/**
 * @swagger
 * /habits:
 *   patch:
 *     tags:
 *       - "habits"
 *     summary: Update existing habit
 *     description: Update existing habit
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: userId
 *         description: id of the user
 *         in: header
 *         required: true
 *         type: string
 *       - name: habit
 *         description: info of the habit to modify
 *         in: body
 *         required: true
 *         schema:
 *           $ref: "#/definitions/habits"
 *     responses:
 *       200:
 *         description: habit created
 *       400:
 *         description: server error
 */
router.patch('/', (req, res) => {
  res.status(HttpStatus.OK).send('ok');
});

/**
 * @swagger
 * /habits:
 *   delete:
 *     tags:
 *       - "habits"
 *     summary: Delete habit
 *     description: Delete habit
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: userId
 *         description: id of the user
 *         in: header
 *         required: true
 *         type: string
 *       - name: habitId
 *         description: id of the habit to delete
 *         in: body
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: habit deleted
 *       400:
 *         description: server error
 */
router.delete('/', (req, res) => {
  res.status(HttpStatus.OK).send('ok');
});

/**
 * @swagger
 * /habits/good/{habitId}:
 *   post:
 *     tags:
 *       - "habits"
 *     summary: Add points to good habit
 *     description: Add points to good habit
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: userId
 *         description: id of the user
 *         in: header
 *         required: true
 *         type: string
 *       - name: habitId
 *         description: id of the habit to add points
 *         in: body
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: OK
 *         schema:
 *           $ref: "#/definitions/habits"
 *       400:
 *         description: server error
 */
router.post('/good/:habitId', (req, res) => {
  res.status(HttpStatus.OK).send('ok');
});
/**
 * @swagger
 * /habits/bad/{habitId}:
 *   post:
 *     tags:
 *       - "habits"
 *     summary: Subtract points to bad habit
 *     description: Subtract points to bad habit
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: userId
 *         description: id of the user
 *         in: header
 *         required: true
 *         type: string
 *       - name: habitId
 *         description: id of the habit to subtract points
 *         in: body
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: OK
 *         schema:
 *           $ref: "#/definitions/habits"
 *       400:
 *         description: server error
 */
router.post('/bad/:habitId', (req, res) => {
  res.status(HttpStatus.OK).send('ok');
});

module.exports = router;
