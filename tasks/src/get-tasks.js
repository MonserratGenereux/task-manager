var getTasksHandler = function(request) {
    console.log("getHabitsHandler", request);
    return {
        habits: [{
                id: "1",
                name: "comer"
            },
            {
                id: "2",
                name: "correr"
            }
        ]
    };
}

module.exports = getTasksHandlers;