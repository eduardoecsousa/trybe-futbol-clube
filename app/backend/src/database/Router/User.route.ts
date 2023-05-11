import { Router, NextFunction, Request, Response } from 'express';
import 'express-async-errors';
import ErrorTratative from '../Errors/Errors';
import UserController from '../controllers/User.controller';
import loginValidateInputs from '../middlewares/LoginValidation';
import verificToken from '../middlewares/ValidaToken';

const routerUser = Router();

routerUser.post('/', loginValidateInputs, UserController.makeLogin);

routerUser.get('/role', verificToken, UserController.getRole);

routerUser.use((err: ErrorTratative, _req: Request, res: Response, next: NextFunction) => {
  const { name, message, code } = err;
  switch (name) {
    case 'UNAUTHORIZED':
      res.status(code).json({ message });
      break;
    default:
      res.sendStatus(500);
  }
  next();
});

export default routerUser;
