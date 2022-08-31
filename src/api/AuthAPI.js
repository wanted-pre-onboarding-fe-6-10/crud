import instance from './axios';

const baseURL = process.env.REACT_APP_BASE_URL;

export const signUp = async (email, password) => {
  const response = await instance.post(baseURL + '/auth/signup', {
    email,
    password,
  });
  return response;
};

export const signIn = async (email, password) => {
  const response = await instance.post(baseURL + '/auth/signin', {
    email,
    password,
  });
  return response;
};
