import { tokenAxios } from '../api/axios';

export const signIn = async data => {
  return await tokenAxios.post('/auth/signin', data);
};

export const signUp = async data => {
  return await tokenAxios.post('/auth/signup', data);
};
