module.exports = {
	general_report:{
		type: 'object',
		properties:{
			countCompletedTask: { type: 'integer'},
			countCreatedTask: { type: 'integer'},
			countCompletedHabit: { type: 'integer'},
			countCreatedHabit: { type: 'integer'}
		}
	},
	task_report: {
		type: 'object',
		properties:{
			id: { type: 'string'},
			name: { type: 'string'},
			created: { type: 'string'},
			completedOnTime: { type: 'string'},
			completedBeforeTime: { type: 'string'},
			dueDate: { type: 'string'},
			completed: { type: 'boolean'}
		},
        additionalProperties: false
	},
	habit_report: {
		type: 'object',
		properties:{
			bestHabit: { type: 'object' },
			worstHabit: { type: 'object' },
			id: { type: 'string'},
			name: { type: 'string'},
			type: { type: 'string'},
			score: { type: 'integer'},
		}
	}
};
