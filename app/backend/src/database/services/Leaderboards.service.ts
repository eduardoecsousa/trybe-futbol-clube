import Matche from '../models/Matche.model';
import Team from '../models/Team.model';
import { attributesHome, attributesAway } from './utils/attributes';
import { leaderboardsType, orderLeaderboards, somaResultsMatches } from './utils/functions';

export default class LeaderboardsService {
  public static async laederboardsHome() {
    const matches:unknown = await Matche.findAll({
      where: { inProgress: false },
      raw: true,
      include: [
        { model: Team, as: 'homeTeam', attributes: [] },
      ],
      attributes: attributesHome,
      group: 'home_team_id',
      order: [
        ['totalPoints', 'DESC'],
        ['totalVictories', 'DESC'],
        ['goalsBalance', 'DESC'],
        ['goalsFavor', 'DESC'],
      ],
    });
    return matches as leaderboardsType[];
  }

  public static async laederboardsAway() {
    const matches: unknown = await Matche.findAll({
      where: { inProgress: false },
      raw: true,
      include: [
        { model: Team, as: 'awayTeam', attributes: [] },
      ],
      attributes: attributesAway,
      group: 'away_team_id',
      order: [
        ['totalPoints', 'DESC'],
        ['totalVictories', 'DESC'],
        ['goalsBalance', 'DESC'],
        ['goalsFavor', 'DESC'],
      ],
    });
    return matches as leaderboardsType[];
  }

  public static async laederboards() {
    const matchesAway = await LeaderboardsService.laederboardsAway();
    const matchesHome = await LeaderboardsService.laederboardsHome();
    const matchesAll = matchesAway.reduce((acc: unknown[], away: leaderboardsType) => {
      const filterhome = matchesHome.find((home) => home.name === away.name);
      const newMatch = filterhome ? somaResultsMatches(filterhome, away) : away;
      return [...acc, newMatch];
    }, []);

    return orderLeaderboards(matchesAll as leaderboardsType[]);
  }
}

// Para o campo Aproveitamento do time (%), que é a porcentagem de jogos ganhos, use a seguinte fórmula: [P / (J * 3)] * 100, onde
