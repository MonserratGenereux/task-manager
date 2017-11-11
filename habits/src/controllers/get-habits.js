var getHabitsHandler = function (request) {
    console.log("getHabitsHandler", request);
    return {
      succeded: true,
      habits: [{
        id: "1",
        name: "pancho",
        description: "desc",
        type: "0",
        difficulty: "1",
        score: 5.0
      },
      {
        id: "2",
        name: "dos",
        description: "desc",
        type: "1",
        difficulty: "2",
        score: 6.0
      }]
    };
}

module.exports = getHabitsHandler;
