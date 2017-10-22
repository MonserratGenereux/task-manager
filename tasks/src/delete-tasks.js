var deleteTaskHandler = function(request) {
    console.log("Delete Task", request)
    return { message: 'OK' };
}

module.exports = deleteTaskHandler;