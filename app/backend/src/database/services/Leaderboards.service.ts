import Matche from '../models/Matche.model';
import Team from '../models/Team.model';
import { attributesHome, attributesAway } from './utils/attributes';

export default class LeaderboardsService {
  public static async laederboardsHome() {
    const matches = await Matche.findAll({
      where: { inProgress: false },
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
    return matches;
  }

  public static async laederboardsAway() {
    const matches = await Matche.findAll({
      where: { inProgress: false },
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
    return matches;
  }
}
