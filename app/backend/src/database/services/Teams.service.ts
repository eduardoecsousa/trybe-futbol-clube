import Team, { teamObject } from '../models/Team.model';

class TeamsService {
  public static async findAll(): Promise<teamObject[]> {
    const teams = await Team.findAll();
    return teams;
  }

  public static async findById(id:number): Promise<teamObject | null> {
    const team = await Team.findByPk(id);
    return team as teamObject;
  }
}

export default TeamsService;
