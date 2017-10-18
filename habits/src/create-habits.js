var createHabitHandler = function(request){
    console.log("Creating Habit", request)
    return {
                         id: "1",
                         name: "pancho",
                         type: 1,
                         difficulty: 3,
                         score: 5.0
                     }
}

module.exports = createHabitHandler;
