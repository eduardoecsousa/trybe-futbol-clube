import { Request, Response } from 'express';
import MatchesService from '../services/Matches.service';
import { MatchObjNoId } from '../models/Matche.model';

export default class MatchesController {
  public static async getAllInProgress(req:Request, res:Response) {
    const { inProgress } = req.query;
    let matches;
    if (inProgress) {
      const convertBool = inProgress === 'true';
      matches = await MatchesService.findByInProgress(convertBool);
    } else {
      matches = await MatchesService.findAll();
    }
    res.status(200).json(matches);
  }

  public static async updateMatches(req:Request, res:Response) {
    const { id } = req.params;
    MatchesService.updateMatches(+id);
    res.status(200).json({ message: 'Finished' });
  }

  public static async updateGols(req:Request, res:Response) {
    const { id } = req.params;
    const { homeTeamGoals, awayTeamGoals } = req.body;
    MatchesService.updateGols(+id, +homeTeamGoals, +awayTeamGoals);
    res.status(200).json({ message: 'Success' });
  }

  public static async createMatche(req:Request, res:Response) {
    const newMatche = req.body;
    const matcheSuccess = await MatchesService.createMatches(newMatche as MatchObjNoId);
    res.status(201).json(matcheSuccess);
  }
}
