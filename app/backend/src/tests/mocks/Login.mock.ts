import { password } from "../../database/config/database";

const mockReturnFind = {
  id: 1,
  username: 'Maicon',
  password: '$2a$08$xi.Hxk1czAO0nZR..B393u10aED0RQ1N3PAEXQ7HxtLjKPEZBu.PW',
  role: 'admin',
}

const mockLogin = {
  email: 'maicon@email.com',
  password: 'secret_admin',
};

const mockLoginEmailIncorect = {
  email: 'maicon@email',
  password: 'secret_admin',
};

const mockLoginPassworfIncorect = {
  email: 'maicon@email.com',
  password: 'secr',
};

const mockLoginIsInvalid = {
  email: 'maicon@email.com',
  password: 'secraskjkadsa',
}

export {
  mockReturnFind,
  mockLogin,
  mockLoginEmailIncorect,
  mockLoginPassworfIncorect,
  mockLoginIsInvalid
}