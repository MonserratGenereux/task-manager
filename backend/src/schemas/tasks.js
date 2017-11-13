module.exports = {
    tasks:{
        type: 'object',
        properties:{
            id: { type: 'string'},
            name: { type: 'string'},
            description: { type: 'string'},
            color: { type: 'string'},
            // due date: MM/DD/YYYY
            dueDate: { type: 'string'},
            reminder: { type: 'string'}
        },
        additionalProperties: false
    }
};
