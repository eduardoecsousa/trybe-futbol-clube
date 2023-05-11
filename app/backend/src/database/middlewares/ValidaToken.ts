import { Request, Response, NextFunction } from 'express';
import { authenticateToken } from '../Utils/auth';

export default async function verificToken(req: Request, res: Response, next:NextFunction) {
  const token = req.header('Authorization');

  if (!token) {
    return res.status(401).json({ message: 'Token not found' });
  }

  try {
    authenticateToken(token);

    next();
  } catch (error) {
    return res.status(401).json({ message: 'Token must be a valid token' });
  }
}
