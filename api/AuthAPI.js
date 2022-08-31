import { instance } from './axios';

export const signUp = async (email, password) => {
  const response = await instance.post('/auth/signup', { email, password });
  return response;
};

export const signIn = async (email, password) => {
  const response = await instance.post('/auth/signin', { email, password });
  return response;
};
