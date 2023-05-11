import { password } from "../../database/config/database";

const mockReturnFind = {
  id: 1,
  username: 'Maicon',
  password: '123456',
  role: 'admin',
}

const mockLogin = {
  email: 'maicon@email.com',
  password: '123456',
};

export {
  mockReturnFind,
  mockLogin,
}