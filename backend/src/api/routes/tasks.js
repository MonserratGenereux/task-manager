const express = require('express');
const bodyParser = require('body-parser');
const HttpStatus = require('http-status-codes');


const router = express.Router();
router.use(bodyParser.urlencoded({ extended: true }));

/**
 * @swagger
 * /tasks:
 *   get:
 *     tags:
 *       - "tasks"
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
  res.status(HttpStatus.OK).send([
    {
      'id': 'el id',
      'name': 'el nombre',
      'type': 10,
      'difficulty': 10,
      'score': 10
    },
    {
      'id': 'el id',
      'name': 'el nombre',
      'type': 10,
      'difficulty': 10,
      'score': 10
    },
    {
      'id': 'el id',
      'name': 'el nombre',
      'type': 10,
      'difficulty': 10,
      'score': 10
    },
    {
      'id': 'el id',
      'name': 'el nombre',
      'type': 10,
      'difficulty': 10,
      'score': 10
    }
  ]);
});

/**
 * @swagger
 * /tasks/{taskId}:
 *   get:
 *     tags:
 *       - "tasks"
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
 * /tasks:
 *   post:
 *     tags:
 *       - "tasks"
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
 * /tasks:
 *   patch:
 *     tags:
 *       - "tasks"
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
 * /tasks:
 *   delete:
 *     tags:
 *       - "tasks"
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
 * /tasks/complete/{taskId}:
 *   post:
 *     tags:
 *       - "tasks"
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
router.post('/complete/:taskId', (req, res) => {
  res.status(HttpStatus.OK).send('ok');
});

module.exports = router;
