import instance from './axios';

const COMMON = process.env.REACT_APP_BASE_URL + '/auth';

export const signUp = async (email, password) => {
  const response = await instance.post(COMMON + '/signup', { email, password });

  return response;
};

export const signIn = async (email, password) => {
  const response = await instance.post(COMMON + '/signin', { email, password });
  return response;
};
