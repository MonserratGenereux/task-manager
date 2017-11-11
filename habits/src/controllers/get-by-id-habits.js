var getHabitByIdHandler = function(request){
    console.log("Get Habit by ID", request)
    return {
      succeded: true,
      habit:{
        id: "1",
        name: "pancho",
        type: "1",
        difficulty: "2",
        score: 5.0
      }
    };
}

module.exports = getHabitByIdHandler;
