export type leaderboardsType = {
  name: string;
  totalPoints: number,
  totalGames: number,
  totalVictories: number,
  totalDraws: number,
  totalLosses: number,
  goalsFavor: number,
  goalsOwn: number,
  goalsBalance: number,
  efficiency: number,
};

type conplixty = {
  points: number,
  victories:number,
  golsBalance:number,
  goalsFavor:number,
  a:leaderboardsType,
  b:leaderboardsType,
};

const sum = (n1:unknown, n2:unknown) => {
  const total = Number(n1) + Number(n2);
  return total;
};

export const somaResultsMatches = (home:leaderboardsType, away: leaderboardsType) => ({
  name: away.name,
  totalPoints: sum(home.totalPoints, away.totalPoints),
  totalGames: home.totalGames + away.totalGames,
  totalVictories: home.totalVictories + away.totalVictories,
  totalDraws: home.totalDraws + away.totalDraws,
  totalLosses: home.totalLosses + away.totalLosses,
  goalsFavor: Number(home.goalsFavor) + Number(away.goalsFavor),
  goalsOwn: Number(home.goalsOwn) + Number(away.goalsOwn),
  goalsBalance: Number(home.goalsBalance) + Number(away.goalsBalance),
  efficiency: (
    (sum(home.totalPoints, away.totalPoints) / (
      sum(home.totalGames, away.totalGames) * 3)) * 100
  ).toFixed(2),
});

function orderConplexity({
  points,
  victories,
  golsBalance,
  goalsFavor,
  a,
  b,
}: conplixty) {
  if (points !== 0) return a.totalPoints > b.totalPoints ? -1 : 1;
  if (victories !== 0) return a.totalVictories > b.totalVictories ? -1 : 1;
  if (golsBalance !== 0) return a.goalsBalance > b.goalsBalance ? -1 : 1;
  if (goalsFavor !== 0) return a.goalsFavor > b.goalsFavor ? -1 : 1;
  return -1;
}

export const orderLeaderboards = (array: leaderboardsType[]) => {
  const order = array.sort((a, b) => {
    const points = a.totalPoints === b.totalPoints ? 0 : 1;
    const victories = a.totalVictories === b.totalVictories ? 0 : 1;
    const golsBalance = a.goalsBalance === b.goalsBalance ? 0 : 1;
    const goalsFavor = a.goalsFavor === b.goalsFavor ? 0 : 1;
    return orderConplexity({ points, victories, golsBalance, goalsFavor, a, b });
  });
  return order;
};

export default sum;
