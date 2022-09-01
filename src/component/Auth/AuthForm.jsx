import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signIn, signUp } from '../../api/AuthAPI';
import * as S from '../../styles/componentStyle';

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
    pw: '',
  });

  const setUserEmail = e => {
    setUserInfo(prev => {
      return {
        email: e.target.value,
        pw: prev.pw,
      };
    });
    handleIsValidInput();
  };

  const setUserPassword = e => {
    setUserInfo(prev => {
      return {
        email: prev.email,
        pw: e.target.value,
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
      setUserInfo({ email: '', pw: '' });
    } else {
      alert(response.data.message);
    }
  };

  const userLogin = async (email, password) => {
    const response = await signIn(email, password);

    if (response.status === 200) {
      localStorage.setItem('access', response.data.access_token);
      navigate('/todo');
    } else {
      alert(response.data.message);
    }
  };

  const authClick = () => {
    if (toRegister) {
      userCreate(userInfo.email, userInfo.pw);
    } else {
      userLogin(userInfo.email, userInfo.pw);
    }
  };

  const handleIsValidInput = () => {
    const idCheck = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/g;
    const pwCheck = /^.{8,}$/g;
    const isChecked = idCheck.test(userInfo.email) && pwCheck.test(userInfo.pw);
    setIsValidInput(isChecked);
  };

  return (
    <S.Container>
      <S.AuthTitle>{toRegister ? '회원가입' : '로그인'}</S.AuthTitle>
      <S.AuthInput
        inputType="email"
        placeholder="Email을 입력해 주세요."
        value={userInfo.email}
        onChange={setUserEmail}
      />
      <S.AuthInput
        inputType="password"
        placeholder="비밀번호를 입력해 주세요."
        value={userInfo.pw}
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
    </S.Container>
  );
};

export default AuthForm;
