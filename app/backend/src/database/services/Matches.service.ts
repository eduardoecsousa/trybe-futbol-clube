import Matche from '../models/Matche.model';
import Team from '../models/Team.model';

export default class MatchesService {
  public static async findAll() {
    const matches = await Matche.findAll({
      include: [
        { model: Team, as: 'homeTeam', attributes: ['teamName'] },
        { model: Team, as: 'awayTeam', attributes: ['teamName'] },
      ],
    });
    return matches;
  }
}
