module.exports = {
    tasks: {
        type: 'object',
        properties: {
            id: { type: 'integer' },
            user_id: { type: 'integer' },
            title: { type: 'string' },
            description: { type: 'string' },
            created_timestamp: { type: 'integer' },
            due_timestamp: { type: 'integer' },
            reminder_timestamp: { type: 'integer' }, //array of integers
            display_color: { type: 'integer' },
            is_completed: { type: 'boolean' },
            reminder_display: { type: 'boolean' }
        },
        additionalProperties: false
    },
    TaskCreate: {
        type: 'object',
        properties: {
            title: { type: 'string' },
            description: { type: 'string' },
            created_timestamp: { type: 'integer' },
            due_timestamp: { type: 'integer' },
            reminder_timestamp: { type: 'integer' } //array of integers
        },
        additionalProperties: false
    },
    TaskUpdate: {
        type: 'object',
        properties: {
            id: { type: 'integer' },
            title: { type: 'string' },
            description: { type: 'string' },
            created_timestamp: { type: 'integer' },
            due_timestamp: { type: 'integer' },
            reminder_timestamp: { type: 'integer' },
            reminder_display: { type: 'boolean' }
        },
        additionalProperties: false

    },
    StatusResponse: {
        type: 'object',
        properties: {
            is_completed: { type: 'boolean' },
            taskId: { type: 'string' },
            error: { type: 'string' }
        },
        additionalProperties: false
    },
    GetTasksResponse: {
        type: 'object',
        properties: {
            is_completed: { type: 'boolean' },
            tasks: {
                type: 'array',
                items: { $ref: "#/definitions/tasks" }
            },
            error: { type: 'string' }
        },
        additionalProperties: false
    }
};