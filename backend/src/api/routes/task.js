const express = require('express');
const bodyParser = require('body-parser');
const HttpStatus = require('http-status-codes');


const router = express.Router();
router.use(bodyParser.urlencoded({ extended: true }));

/**
 * @swagger
 * /task:
 *   get:
 *     tags:
 *       - "task"
 *     summary: Fetch tasks
 *     description: Returns all tasks available for the user
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
 *         description: list of tasks
 *       400:
 *         description: invalid username
 */
router.get('/', (req, res) => {
  res.status(HttpStatus.OK).send('ok');
});

/**
 * @swagger
 * /task/{taskId}:
 *   get:
 *     tags:
 *       - "task"
 *     summary: Fetch task
 *     description: Returns specified task
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
 *         description: single task
 *       400:
 *         description: invalid task
 */
router.get('/:taskId', (req, res) => {
  res.status(HttpStatus.OK).send('ok');
});

/**
 * @swagger
 * /task:
 *   post:
 *     tags:
 *       - "task"
 *     summary: Create new task
 *     description: Create new task
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: userId
 *         description: id of the user
 *         in: header
 *         required: true
 *         type: string
 *       - name: task
 *         description: info of the newly create task
 *         in: body
 *         required: true
 *         type: object
 *     responses:
 *       200:
 *         description: single task
 *       400:
 *         description: invalid username
 */
router.post('/', (req, res) => {
  res.status(HttpStatus.OK).send('ok');
});

/**
 * @swagger
 * /task:
 *   patch:
 *     tags:
 *       - "task"
 *     summary: Update existing task
 *     description: Update existing task
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: userId
 *         description: id of the user
 *         in: header
 *         required: true
 *         type: string
 *       - name: task
 *         description: info of the task to be modified
 *         in: body
 *         required: true
 *         type: object
 *     responses:
 *       200:
 *         description: single task
 *       400:
 *         description: invalid username
 */
router.patch('/', (req, res) => {
  res.status(HttpStatus.OK).send('ok');
});

/**
 * @swagger
 * /task:
 *   delete:
 *     tags:
 *       - "task"
 *     summary: Delete task
 *     description: Delete task
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: userId
 *         description: id of the user
 *         in: header
 *         required: true
 *         type: string
 *       - name: taskId
 *         description: id of the task to delete
 *         in: body
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: single task
 *       400:
 *         description: invalid username
 */
router.delete('/', (req, res) => {
  res.status(HttpStatus.OK).send('ok');
});

/**
 * @swagger
 * /task/complete:
 *   post:
 *     tags:
 *       - "task"
 *     summary: Mark task as complete
 *     description: Mark task as complete
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: userId
 *         description: id of the user
 *         in: header
 *         required: true
 *         type: string
 *       - name: taskId
 *         description: id of the task to mark as complete
 *         in: body
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: single task
 *       400:
 *         description: invalid username
 */
router.post('/complete', (req, res) => {
  res.status(HttpStatus.OK).send('ok');
});

module.exports = router;
