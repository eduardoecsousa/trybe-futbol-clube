import { Router, NextFunction, Request, Response } from 'express';
import 'express-async-errors';
import ErrorTratative from '../Errors/Errors';
import LeaderboardController from '../controllers/Leaderboard.controller';

const routerLeaderboard = Router();

routerLeaderboard.get('/home', LeaderboardController.getAllLeaderboardsHome);
routerLeaderboard.get('/away', LeaderboardController.getAllLeaderboardsAway);
routerLeaderboard.get('/', LeaderboardController.getAllLeaderboardsAll);

routerLeaderboard.use((err: ErrorTratative, _req: Request, res: Response, next: NextFunction) => {
  const { name, message, code } = err;
  if (name) {
    res.status(code).json({ message });
  } else {
    res.sendStatus(500).json(err);
  }
  next();
});

export default routerLeaderboard;
