import { instance } from './customAxios';

const COMMON = process.env.REACT_APP_BASE_URL + 'auth';

//회원가입
export const UserSignUp = async (email, password) => {
  try {
    const response = await instance.post(COMMON + '/signup', {
      email,
      password,
    });
    return response;
  } catch (e) {
    throw e;
  }
};

//로그인
export const UserSignIn = async (email, password) => {
  try {
    const response = await instance.post(COMMON + '/signin', {
      email,
      password,
    });
    return response;
  } catch (e) {
    throw e;
  }
};
