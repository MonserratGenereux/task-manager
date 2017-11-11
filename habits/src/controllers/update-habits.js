var updateHabitHandler = function(request){
    console.log("Update Habit", request)
    return {
      succeded: false,
      habitId: "",
      error: "ERROR"
    };
}

module.exports = updateHabitHandler;
