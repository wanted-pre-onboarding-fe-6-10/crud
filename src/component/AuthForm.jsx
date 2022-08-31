import { useState } from 'react';
import { signIn, signUp } from '../api/AuthAPI';
import * as S from '../style/AuthStyle';

const AuthForm = () => {
  const [toRegister, setToRegister] = useState(false);
  const [userInfo, setUserInfo] = useState({
    email: '',
    password: '',
  });

  const setUserEmail = e => {
    setUserInfo(prev => {
      return {
        email: e.target.value,
        password: prev.password,
      };
    });
  };

  const setUserPassword = e => {
    setUserInfo(prev => {
      return {
        email: prev.email,
        password: e.target.value,
      };
    });
  };

  const userCreate = async (email, password) => {
    const response = await signUp(email, password);
    console.log(response);
  };

  //   const userLogin = async (email, password) => {
  //     const response = await signIn(email, password);
  //   };

  const authClick = () => {
    if (toRegister) {
      userCreate(userInfo.email, userInfo.password);
    }
  };

  return (
    <S.AuthContainer>
      <S.AuthTitle>
        {toRegister ? '회원가입페이지' : '로그인페이지'}
      </S.AuthTitle>
      <S.AuthInput
        type="email"
        placeholder="Email을 입력해 주세요."
        onChange={setUserEmail}
      />
      <S.AuthInput
        type="password"
        placeholder="비밀번호를 입력해 주세요."
        onChange={setUserPassword}
      />
      <S.AuthButton onClick={authClick}>
        {toRegister ? '회원가입' : '로그인'}
      </S.AuthButton>
      <S.RegisterButton
        onClick={() => {
          setToRegister(!toRegister);
        }}
      >
        {!toRegister ? '회원가입' : '로그인'}
      </S.RegisterButton>
    </S.AuthContainer>
  );
};

export default AuthForm;
