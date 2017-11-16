module.exports = {
    habits:{
        type: 'object',
        properties:{
            _id: { type: 'string'},
            userId: { type: 'string' },
            name: { type: 'string' },
            description: { type: 'string'},
            good: { type: 'boolean'},
            bad: { type: 'boolean'},
            difficulty: { type: 'string' },
            score: { type: 'number'},
            color: { type: 'string'}
        },
        additionalProperties: false
    },
    HabitCreate:{
      type: 'object',
      properties: {
        name: { type: 'string' },
        description: { type: 'string'},
        good: { type: 'boolean'},
        bad: { type: 'boolean'},
        difficulty: { type: 'string' }
      },
      additionalProperties: false
    },
    HabitUpdate:{
      type: 'object',
      properties: {
        _id: { type: 'string' },
        name: { type: 'string' },
        description: { type: 'string'},
        good: { type: 'boolean'},
        bad: { type: 'boolean'},
        difficulty: { type: 'string' }
      },
      additionalProperties: false
    },
    StatusResponse:{
      type: 'object',
      properties: {
        succeded: { type: 'boolean'},
        habitId: { type: 'string' },
        error: { type: 'string' }
      },
      additionalProperties: false
    },
    GetHabitsResponse:{
      type: 'object',
      properties:{
        succeded: { type: 'boolean'},
        habits: { type: 'array',
                  items: { $ref: "#/definitions/habits" }},
        error: { type: 'string'}
      },
      additionalProperties: false
    },
    GetHabitResponse:{
      type: 'object',
      properties:{
        succeded: { type: 'boolean'},
        habits: { $ref: "#/definitions/habits" },
        error: { type: 'string'}
      },
      additionalProperties: false
    }
};
