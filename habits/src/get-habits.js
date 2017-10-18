var getHabitsHandler = function (request) {
    console.log("getHabitsHandler", request);
    return {habits: [{
                                  id: "1",
                                  name: "pancho",
                                  type: 0,
                                  difficulty: 1,
                                  score: 5.0
                              },
                              {
                                  id: "2",
                                  name: "pancho2",
                                  type: 1,
                                  difficulty: 2,
                                  score: 6.0
                              }]
                      };
}

module.exports = getHabitsHandler;
