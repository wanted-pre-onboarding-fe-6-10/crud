import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signIn, signUp } from '../api/AuthAPI';
import * as S from '../style/AuthStyle';

const AuthForm = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem('access')) {
      navigate('/todo', { replace: false });
    }
  }, []);

  const [toRegister, setToRegister] = useState(false);
  const [isValidInput, setIsValidInput] = useState(true);
  let [userInfo, setUserInfo] = useState({
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
    handleIsValidInput();
  };

  const setUserPassword = e => {
    setUserInfo(prev => {
      return {
        email: prev.email,
        password: e.target.value,
      };
    });
    handleIsValidInput();
  };

  const userCreate = async (email, password) => {
    const response = await signUp(email, password);

    if (response.status === 201) {
      localStorage.setItem('access', response.data.access_token);
      setToRegister(false);
      setIsValidInput(false);
      alert('회원가입이 완료되었습니다.');
      setUserInfo({ email: '', password: '' });
    } else {
      alert(response.data.message);
    }
  };

  const userLogin = async (email, password) => {
    const response = await signIn(email, password);

    if (response.status === 200) {
      localStorage.setItem('access', response.data.access_token);
      alert('회원가입이 완료되었습니다.');
      navigate('/todo');
    }
    console.log(response);
  };

  const authClick = () => {
    toRegister
      ? userCreate(userInfo.email, userInfo.password)
      : userLogin(userInfo.email, userInfo.password);
  };

  const handleIsValidInput = () => {
    const emailCheck = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/g;
    const passwordCheck = /^.{8,}$/g;
    const isChecked =
      emailCheck.test(userInfo.email) && passwordCheck.test(userInfo.password);
    setIsValidInput(isChecked);
  };

  return (
    <S.AuthContainer>
      <S.AuthTitle>
        {toRegister ? '회원가입페이지' : '로그인페이지'}
      </S.AuthTitle>
      <S.AuthInput
        inputType="email"
        placeholder="Email을 입력해 주세요."
        value={userInfo.email}
        onChange={setUserEmail}
      />
      <S.AuthInput
        inputType="password"
        placeholder="비밀번호를 입력해 주세요."
        value={userInfo.password}
        onChange={setUserPassword}
      />
      <S.AuthButton onClick={authClick} disabled={!isValidInput}>
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
