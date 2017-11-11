var deleteHabitHandler = function(request){
    console.log("Delete Habit", request)
    return {
      succeded: true,
      habitId: "1",
      error: ""
    };
}

module.exports = deleteHabitHandler;
