export function countCorrectPredictions(voorspellingen, stand, topscorers) {
  const correctPredictions = {};
  for (const person in voorspellingen) {
    correctPredictions[person] = { count: 0, predictions: [] };

    for (const position in voorspellingen[person].league) {
      if (voorspellingen[person].league[position] === stand[position]) {
        correctPredictions[person].count++;
        correctPredictions[person].predictions.push(stand[position]);
      }
    }

    if (
      voorspellingen[person].topscorers?.filter((e) =>
        topscorers.map((player) => player.lastname).includes(e)
      ).length
    ) {
      correctPredictions[person].count += voorspellingen[
        person
      ].topscorers?.filter((e) =>
        topscorers.map((player) => player.lastname).includes(e)
      ).length;
      voorspellingen[person].topscorers?.forEach((e) => {
        if (topscorers.map((player) => player.lastname).includes(e)) {
          correctPredictions[person].predictions.push(e);
        }
      });
    }
  }

  return correctPredictions;
}

export function simplifyStandings(apiResponse) {
  if (!apiResponse.response[0]) {
    return "No result";
  }
  const standings = apiResponse.response[0].league.standings[0];
  const simplifiedStandings = {};

  standings.forEach((team) => {
    simplifiedStandings[team.rank] = team.team.name;
  });
  return simplifiedStandings;
}

export function simplifyPlayerData(data) {
  const simplifiedData = [];

  data.response.forEach((playerData) => {
    const { lastname } = playerData.player;
    const { goals } = playerData.statistics[0];
    const { total: goalsScored } = goals;

    simplifiedData.push({ lastname, goalsScored });
  });

  return simplifiedData;
}
