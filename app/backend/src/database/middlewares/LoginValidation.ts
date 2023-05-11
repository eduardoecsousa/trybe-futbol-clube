import { NextFunction, Request, Response } from 'express';

const loginValidateInputs = (req: Request, res: Response, next: NextFunction) => {
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(400).json({ message: 'All fields must be filled' });
  }
  next();
};

export default loginValidateInputs;
