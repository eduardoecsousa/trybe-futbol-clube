import Team from '../../models/Team.model';
import ErrorTratative from '../../Errors/Errors';

const verificaTeamExist = async (id:number) => {
  const checkTeam = await Team.findOne({ where: { id } });
  return checkTeam;
};

const checkCreate = async (homeTeamId: number, awayTeamId:number) => {
  const matchesEqual = homeTeamId === awayTeamId;
  if (matchesEqual) {
    throw new ErrorTratative(
      'It is not possible to create a match with two equal teams',
      'UNPROCESSABLE_ENTITY',
      422,
    );
  }
  const team1 = await verificaTeamExist(homeTeamId);
  const team2 = await verificaTeamExist(awayTeamId);
  if (!team1 || !team2) {
    throw new ErrorTratative(
      'There is no team with such id!',
      'NOT_FOUND',
      404,
    );
  }
  return null;
};

export default checkCreate;
