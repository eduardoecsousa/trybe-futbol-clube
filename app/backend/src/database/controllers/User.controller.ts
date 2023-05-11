import { Request, Response } from 'express';
import UserService from '../services/User.service';

export default class UserController {
  public static async makeLogin(req: Request, res: Response) {
    const { email, password } = req.body;
    const fetchLogin = await UserService.Login(email, password);
    res.status(200).json({ token: fetchLogin });
  }

  public static async getRole(req: Request, res: Response) {
    const token = req.header('Authorization');
    const role = await UserService.findRole(token as string);
    res.status(200).json(role);
  }
}
