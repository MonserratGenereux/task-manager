var updateHabitHandler = function(request){
    console.log("Update Habit", request)
    return {
                 id: "1",
                 name: "pancho",
                 type: 0,
                 difficulty: 2,
                 score: 5.0
             };
}

module.exports = updateHabitHandler;
