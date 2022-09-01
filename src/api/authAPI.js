import instance from './axios';

const COMMON = process.env.REACT_APP_BASE_URL + '/auth';

export const signIn = async signinValue => {
  const response = await instance.post(COMMON + '/signin', signinValue);
  return response;
};

export const signUp = async signupValue => {
  const response = await instance.post(COMMON + '/signup', signupValue);

  return response;
};
