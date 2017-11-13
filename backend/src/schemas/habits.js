module.exports = {
    habits:{
        type: 'object',
        properties:{
            id: { type: 'string'},
            name: { type: 'string' },
            type: { type: 'integer'},
            difficulty: { type: 'integer' },
            score: { type: 'number'}
        },
        additionalProperties: false
    }
};
