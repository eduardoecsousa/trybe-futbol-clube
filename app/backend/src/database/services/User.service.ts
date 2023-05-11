import { compare } from 'bcryptjs';
import User, { userObj } from '../models/User.model';
import ErrorTratative from '../Errors/Errors';
import createTokenJWT from '../Utils/auth';

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
    const user = await User.findOne({
      where: { email: emailReq },
    });
    if (!user) {
      throw new ErrorTratative('usuario não encontrado', 'BAD_REQUEST', 422);
    }
    const { password, id, role, username } = user;
    const checkPassword = compare(passwordReq, password);
    if (!checkPassword) {
      throw new ErrorTratative('email ou senha incorreta', 'BAD_REQUEST', 422);
    }
    const token = createTokenJWT({ id, role, username, email: emailReq });
    return token;
  }
}

export default UserService;
