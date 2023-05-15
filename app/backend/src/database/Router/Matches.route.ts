import { Router, NextFunction, Request, Response } from 'express';
import 'express-async-errors';
import ErrorTratative from '../Errors/Errors';
import MatchesController from '../controllers/Matches.controller';
import verificToken from '../middlewares/ValidaToken';

const routerMatches = Router();

routerMatches.get('/', MatchesController.getAllInProgress);

routerMatches.patch('/:id/finish', verificToken, MatchesController.updateMatches);

routerMatches.patch('/:id', verificToken, MatchesController.updateGols);

routerMatches.post('/', verificToken, MatchesController.createMatche);

routerMatches.use((err: ErrorTratative, _req: Request, res: Response, next: NextFunction) => {
  const { name, message, code } = err;
  switch (name) {
    case 'UNAUTHORIZED':
      res.status(code).json({ message });
      break;
    default:
      res.sendStatus(500).json(err);
  }
  next();
});

export default routerMatches;
