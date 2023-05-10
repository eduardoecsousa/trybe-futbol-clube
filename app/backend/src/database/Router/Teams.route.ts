import { Router } from 'express';
import TeamController from '../controllers/Teams.cotroller';

const routeTeams = Router();

routeTeams.get('/', TeamController.getAll);
routeTeams.get('/:id', TeamController.getById);

export default routeTeams;
