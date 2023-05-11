import { SignOptions, sign, verify } from 'jsonwebtoken';

// Essa interface dependerá das informações que passamos em nosso payload.
interface JWTPayload {
  id: number,
  username: string,
  role: string,
  email: string,
}
// A função create TokenJWT recebe como parâmetro o nosso payload e retorna um token ao usuário.

const secret = process.env.JWT_SECRET as string;

export default function createTokenJWT(payload: JWTPayload) {
  const config: SignOptions = {
    expiresIn: '3d',
    algorithm: 'HS256',
  };

  const token = sign(payload, secret, config);
  return token;
}

export const authenticateToken = (token: string) => {
  console.log(secret);
  const decoded = verify(token, secret);
  return decoded as JWTPayload;
};
