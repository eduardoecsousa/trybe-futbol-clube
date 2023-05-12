import { Request, Response } from 'express';
import MatchesService from '../services/Matches.service';

export default class MatchesController {
  public static async getAll(_req:Request, res:Response) {
    const matches = await MatchesService.findAll();
    res.status(200).json(matches);
  }
}
