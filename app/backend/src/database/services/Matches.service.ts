import ErrorTratative from '../Errors/Errors';
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

  public static async findByInProgress(inProgress: boolean) {
    const matches = await Matche.findAll({
      where: { inProgress },
      include: [
        { model: Team, as: 'homeTeam', attributes: ['teamName'] },
        { model: Team, as: 'awayTeam', attributes: ['teamName'] },
      ],
    });
    return matches;
  }

  public static async updateMatches(id: number) {
    const update = await Matche.update(
      { inProgress: false },
      { where: { id } },
    );
    if (!update) {
      throw new ErrorTratative('erro', 'UNAUTHORIZED', 401);
    }
    return null;
  }
}
