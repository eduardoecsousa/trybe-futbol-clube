import { Request, Response } from 'express';
import TeamsService from '../services/Teams.service';

class TeamController {
  public static async getAll(_req:Request, res: Response) {
    const teams = await TeamsService.findAll();
    return res.status(200).json(teams);
  }

  public static async getById(req:Request, res: Response) {
    const { id } = req.params;
    const team = await TeamsService.findById(+id);
    return res.status(200).json(team);
  }
}

export default TeamController;
