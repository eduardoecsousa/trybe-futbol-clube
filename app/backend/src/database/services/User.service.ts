import { compareSync } from 'bcryptjs';
import User, { userObj } from '../models/User.model';
import ErrorTratative from '../Errors/Errors';
import createTokenJWT from '../Utils/auth';
import validaEmailAndPassword from './validations/validationsLogin';
import { authenticateToken } from '../Utils/auth';

class UserService {
  public static async findAll(): Promise<userObj[]> {
    const users = await User.findAll();
    return users;
  }

  public static async findById(id:number): Promise<userObj | null> {
    const user = await User.findByPk(id);
    return user as userObj;
  }

  public static async Login(
    emailReq: string,
    passwordReq: string,
  ): Promise<string | null> {
    validaEmailAndPassword(emailReq, passwordReq);
    const user = await User.findOne({
      where: { email: emailReq },
    });
    if (!user) {
      throw new ErrorTratative('Invalid email or password', 'UNAUTHORIZED', 401);
    }

    const { password, id, role, username } = user;
    const checkPassword = compareSync(passwordReq, password);
    if (!checkPassword) {
      throw new ErrorTratative('Invalid email or password', 'UNAUTHORIZED', 401);
    }
    const token = createTokenJWT({ id, role, username, email: emailReq });
    return token;
  }

  public static async findRole(token:string): Promise<> {
    const decoded = authenticateToken(token);
    return { role: decoded.role };
  }
}

export default UserService;
