var getTaskByIdHandler = function(request) {
    console.log("Get Habit by ID", request)
    return {
        id: "1",
        name: "comer",
    };
}

module.exports = getTaskByIdHandler;