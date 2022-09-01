import instance from './Axios';

const COMMON = process.env.REACT_APP_API_URL + '/auth';

export const UserSignUp = async (email, password) => {
  const response = await instance.post(COMMON + '/signup', { email, password });

  return response;
};

export const UserSignIn = async (email, password) => {
  const response = await instance.post(COMMON + '/signin', { email, password });
  return response;
};
