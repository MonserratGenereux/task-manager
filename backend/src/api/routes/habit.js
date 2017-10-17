const express = require('express');
const bodyParser = require('body-parser');
const HttpStatus = require('http-status-codes');


const router = express.Router();
router.use(bodyParser.urlencoded({ extended: true }));

/**
 * @swagger
 * /habit:
 *   get:
 *     tags:
 *       - "habit"
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
 *         description: list of habits
 *       400:
 *         description: invalid username
 */
router.get('/', (req, res) => {
  res.status(HttpStatus.OK).send('ok');
});

/**
 * @swagger
 * /habit/{habitId}:
 *   get:
 *     tags:
 *       - "habit"
 *     summary: Fetch habit
 *     description: Returns specified habit
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
 *         description: single habit
 *       400:
 *         description: invalid habit
 */
router.get('/:habitId', (req, res) => {
  res.status(HttpStatus.OK).send('ok');
});

/**
 * @swagger
 * /habit:
 *   post:
 *     tags:
 *       - "habit"
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
 *         type: object
 *     responses:
 *       200:
 *         description: single habit
 *       400:
 *         description: invalid username
 */
router.post('/', (req, res) => {
  res.status(HttpStatus.OK).send('ok');
});

/**
 * @swagger
 * /habit:
 *   patch:
 *     tags:
 *       - "habit"
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
 *         type: object
 *     responses:
 *       200:
 *         description: single habit
 *       400:
 *         description: invalid username
 */
router.patch('/', (req, res) => {
  res.status(HttpStatus.OK).send('ok');
});

/**
 * @swagger
 * /habit:
 *   delete:
 *     tags:
 *       - "habit"
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
 *         description: single habit
 *       400:
 *         description: invalid username
 */
router.delete('/', (req, res) => {
  res.status(HttpStatus.OK).send('ok');
});

/**
 * @swagger
 * /habit/done:
 *   post:
 *     tags:
 *       - "habit"
 *     summary: Mark habit as done
 *     description: Mark habit as done
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: userId
 *         description: id of the user
 *         in: header
 *         required: true
 *         type: string
 *       - name: habitId
 *         description: id of the habit to mark as done
 *         in: body
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: single habit
 *       400:
 *         description: invalid username
 */
router.post('/done', (req, res) => {
  res.status(HttpStatus.OK).send('ok');
});

module.exports = router;
