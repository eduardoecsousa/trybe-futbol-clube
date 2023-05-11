import { Router, NextFunction, Request, Response } from 'express';
import 'express-async-errors';
import ErrorTratative from '../Errors/Errors';
import UserController from '../controllers/User.controller';
import loginValidateInputs from '../middlewares/LoginValidation';

const routerUser = Router();

routerUser.post('/', loginValidateInputs, UserController.makeLogin);

routerUser.use((err: ErrorTratative, _req: Request, res: Response, next: NextFunction) => {
  const { name, message, code } = err;
  switch (name) {
    case 'BAD_REQUEST':
      res.status(code).json({ message });
      break;
    default:
      res.sendStatus(500);
  }
  next();
});

export default routerUser;
