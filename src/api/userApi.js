import axios from 'axios';
const BASE_URL = process.env.REACT_APP_API_URL;

const UserApi = axios.create({
  baseURL: BASE_URL,
});

export const UserSignUp = async ({ email, password }) => {
  const { data } = await UserApi.post('/auth/signup', { email, password });
  return data;
};

export const UserSignIn = async ({ email, password }) => {
  const { data } = await UserApi.post('/auth/signin', { email, password });
  return data;
};
