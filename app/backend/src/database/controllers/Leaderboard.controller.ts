import { Request, Response } from 'express';
import LeaderboardsService from '../services/Leaderboards.service';

export default class LeaderboardController {
  public static async getAllLeaderboardsHome(_req:Request, res: Response) {
    const leaderboardsHome = await LeaderboardsService.laederboardsHome();
    return res.status(200).json(leaderboardsHome);
  }

  public static async getAllLeaderboardsAway(_req:Request, res: Response) {
    const laederboardsAway = await LeaderboardsService.laederboardsAway();
    return res.status(200).json(laederboardsAway);
  }
}
