import ErrorTratative from '../../Errors/Errors';

const validaEmailAndPassword = (email: string, password: string) => {
  const regexEmail = /\S+@\S+\.\S+/;
  if (!regexEmail.test(email) || password.length < 6) {
    throw new ErrorTratative('Invalid email or password', 'UNAUTHORIZED', 401);
  }
  return null;
};

export default validaEmailAndPassword;
