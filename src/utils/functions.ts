export function countCorrectPredictions(voorspellingen, stand) {
  const correctPredictions = {};
  for (const person in voorspellingen) {
    correctPredictions[person] = { count: 0, predictions: [] };
    for (const position in voorspellingen[person]) {
      if (voorspellingen[person][position] === stand[position]) {
        correctPredictions[person].count++;
        correctPredictions[person].predictions.push(stand[position]);
      }
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
