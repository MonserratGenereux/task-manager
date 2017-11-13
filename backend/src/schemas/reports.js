module.exports = {
	admin_reports:{
		type: 'object',
		properties:{
			habits: {
				type: 'object',
				properties:{
					countGreen: { type: 'integer'},
					countRed: { type: 'integer'},
					countBlue: { type: 'integer'},
					countYellow: { type: 'integer'},
					countOrange: { type: 'integer'},
					best: { $ref: "#/definitions/habits"},
					worst: { $ref: "#/definitions/habits"}
				}
			},
			tasks: {
				type: 'object',
				properties:{
					completed: { type: 'integer'},
					delayed: { type: 'integer'},
					onTime: { type: 'integer'},
					beforeTime: { type: 'integer'},
					available: { type: 'integer'}
				}
			}
		}
	},
	user_reports: {
		type: 'object',
		properties:{
			tasks: {
				type: 'object',
				properties: {
					delayed: {
						type: 'array',
						items:{
							$ref: "#/definitions/tasks"},
						},
						dueToday: {
							type: 'array',
							items:{
								$ref: "#/definitions/tasks"},
							}
						}
					},
					habits: {
						type: 'object',
						properties: {
							good: {
								type: 'array',
								items:{
									$ref: "#/definitions/habits"},
								},
								bad: {
									type: 'array',
									items:{
										$ref: "#/definitions/habits"},
									}
								}
							}
						}
					}
				};
