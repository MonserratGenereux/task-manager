var createTaskHandler = function(request) {
    console.log("Creating Task", request)
    return {
        id: "1",
        name: "Comer",
    }
}

module.exports = createTaskHandler;