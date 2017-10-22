module.exports = {
    habit: {
        type: 'object',
        properties: {
            id: { type: 'string' },
            name: { type: 'string' },
            created: { type: 'DATE' },
            completedOnTime: { type: 'DATE' },
            completedBeforeTime: { type: 'DATE' },
            dueDate: { type: 'DATE' },
            completed: { type: 'BOOLEAN' }
        },
        additionalProperties: false
    }
};