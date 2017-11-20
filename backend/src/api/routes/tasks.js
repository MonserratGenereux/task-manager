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
 *       - name: user-id
 *         description: id of the user
 *         in: header
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: OK
 *         schema:
 *           $ref: "#/definitions/GetTasksResponse"
 *       400:
 *         description: invalid request
 *         schema:
 *           $ref: "#/definitions/GetTasksResponse"
 */
router.get('/', (req, res) => {
    req.hea
    if (req.get('user-id')) {
        client.getTasks({ userId: req.get('user-id') }, function(err, TasksResponse) {
            if (err) {
                res.status(HttpStatus.INTERNAL_SERVER_ERROR).send(err.message);
            } else {
                res.status(HttpStatus.OK).send(HabitsResponse);
            }
        });
    } else {
        res.status(HttpStatus.BAD_REQUEST).send('Invalid Request');
    }
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
 *       - name: user-id
 *         description: id of the user
 *         in: header
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: OK
 *         schema:
 *           $ref: "#/definitions/GetTasksResponse"
 *       400:
 *         description: invalid request
 *         schema:
 *           $ref: "#/definitions/GetTasksResponse"
 */
router.get('/', (req, res) => {
    req.hea
    if (req.get('user-id')) {
        client.getTasks({ userId: req.get('user-id') }, function(err, TasksResponse) {
            if (err) {
                res.status(HttpStatus.INTERNAL_SERVER_ERROR).send(err.message);
            } else {
                res.status(HttpStatus.OK).send(TasksResponse);
            }
        });
    } else {
        res.status(HttpStatus.BAD_REQUEST).send('Invalid Request');
    }
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
 *       - name: user-id
 *         description: id of the user
 *         in: header
 *         required: true
 *         type: string
 *       - name: task
 *         description: info of the newly create task
 *         in: body
 *         required: true
 *         schema:
 *           $ref: "#/definitions/TaskCreate"
 *     responses:
 *       200:
 *         description: OK
 *         schema:
 *           $ref: "#/definitions/StatusResponse"
 *       400:
 *         description: Invalid Request
 *         schema:
 *           $ref: "#/definitions/StatusResponse"
 */
router.get('/', (req, res) => {
    req.hea
    if (req.get('user-id')) {
        client.getTasks({ userId: req.get('user-id') }, function(err, TasksResponse) {
            if (err) {
                res.status(HttpStatus.INTERNAL_SERVER_ERROR).send(err.message);
            } else {
                res.status(HttpStatus.OK).send(TasksResponse);
            }
        });
    } else {
        res.status(HttpStatus.BAD_REQUEST).send('Invalid Request');
    }
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
 *       - name: user-id
 *         description: id of the user
 *         in: header
 *         required: true
 *         type: string
 *       - name: task
 *         description: info of the task to be modified
 *         in: body
 *         required: true
 *         schema:
 *           $ref: "#/definitions/TaskCreate"
 *     responses:
 *       200:
 *         description: OK
 *         schema:
 *           $ref: "#/definitions/StatusResponse"
 *       400:
 *         description: Invalid Request
 *         schema:
 *           $ref: "#/definitions/StatusResponse"
 */
router.patch('/', (req, res) => {
    if (req.get('user-id') && req.body.task) {
        req.body.task.userId = req.get('user-id');
        console.log("REQ", req.body.task);
        client.updateTask(req.body.task, function(err, StatusResponse) {
            if (err) {
                res.status(HttpStatus.INTERNAL_SERVER_ERROR).send(err.message);
            } else {
                res.status(HttpStatus.OK).send(StatusResponse);
            }
        });
    } else {
        res.status(HttpStatus.BAD_REQUEST).send('Invalid Request');
    }
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
 *       - name: user-id
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
 *         description: OK
 *         schema:
 *           $ref: "#/definitions/StatusResponse"
 *       400:
 *         description: Invalid Request
 *         schema:
 *           $ref: "#/definitions/StatusResponse"
 */
router.delete('/:taskId', (req, res) => {
    if (req.get('user-id') && req.params.habitId) {
        client.deleteTask({ _id: req.params.taskId, userId: req.get('user-id') }, function(err, GetHabitResponse) {
            if (err) {
                res.status(HttpStatus.INTERNAL_SERVER_ERROR).send(err.message);
            } else {
                res.status(HttpStatus.OK).send(GetTasksResponse);
            }
        });
    } else {
        res.status(HttpStatus.BAD_REQUEST).send('Invalid Request');
    }
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
 *       - name: user-id
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
 *         description: OK
 *           schema:
 *             $ref: "#/definitions/tasks"
 *       400:
 *         description: server error
 *           schema:
 *             $ref: "#/definitions/StatusResponse"
 *          
 *       
 */
router.post('/complete/:taskId', (req, res) => {
    res.status(HttpStatus.OK).send('ok');
});

module.exports = router;