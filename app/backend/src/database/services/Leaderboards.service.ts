import sequelize = require('sequelize');
import Matche from '../models/Matche.model';
import Team from '../models/Team.model';

const array: sequelize.FindAttributeOptions = [
  [sequelize.literal('homeTeam.team_name'), 'name'],
  [
    sequelize.literal(`SUM( CASE
      WHEN home_team_goals > away_team_goals THEN 3
      WHEN home_team_goals = away_team_goals THEN 1
      ELSE 0
  END)`),
    'totalPoints',
  ],
  [sequelize.fn('COUNT', sequelize.col('home_team_id')), 'totalGames'],
  [
    sequelize.literal('COUNT(IF(home_team_goals > away_team_goals, 1, null))'),
    'totalVictories',
  ],
  [
    sequelize.literal('COUNT(IF(home_team_goals = away_team_goals, 1, null))'),
    'totalDraws',
  ],
  [
    sequelize.literal('COUNT(IF(home_team_goals < away_team_goals, 1, null))'),
    'totalLosses',
  ],
  [sequelize.fn('SUM', sequelize.col('home_team_goals')), 'goalsFavor'],
  [sequelize.fn('SUM', sequelize.col('away_team_goals')), 'goalsOwn'],
  [sequelize.literal(' SUM(home_team_goals) - SUM(away_team_goals)'), 'goalsBalance'],
  [sequelize.literal(`ROUND( SUM( CASE
    WHEN home_team_goals > away_team_goals THEN 3
    WHEN home_team_goals = away_team_goals THEN 1
    ELSE 0
END) / (COUNT(home_team_id) * 3) * 100, 2)`), 'efficiency'],
];

export default class LeaderboardsService {
  public static async laederboardsHome() {
    const matches = await Matche.findAll({
      where: { inProgress: false },
      include: [
        { model: Team, as: 'homeTeam', attributes: [] },
      ],
      attributes: array,
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
}
