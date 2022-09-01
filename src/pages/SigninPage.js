import React, { useState, useRef, useEffect } from 'react';
import * as LoginForm from '../components/Login/LoginForm';
import { useNavigate } from 'react-router-dom';
import * as vaildation from '../utils/Validation';
import { UserSignUp } from '../api/userApi';
import { GetTokenInStorage } from '../utils/Localstorage';

function Signin() {
  const nav = useNavigate();
  const regEmail = vaildation.regEmail;
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const [emailError, setEmailError] = useState(false);
  const [pswError, setPswError] = useState(false);
  const [btnError, setbtnError] = useState(true);
  const btnactive = emailError === true || pswError === true || btnError === true;
  const handleEmailChange = e => {
    if (regEmail.test(emailRef.current.value) !== true && emailRef.current.value.length >= 1) {
      setEmailError(true);
    } else {
      setEmailError(false);
    }
    if (emailRef.current.value.length === 0) {
      setbtnError(true);
    } else {
      setbtnError(false);
    }
  };
  const handlePasswordChange = e => {
    if (passwordRef.current.value.length < 8 && passwordRef.current.value.length >= 1) {
      setPswError(true);
    } else {
      setPswError(false);
    }
    if (emailRef.current.value.length === 0) {
      setbtnError(true);
    } else {
      setbtnError(false);
    }
  };
  const handleClick = async e => {
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    try {
      const res = await UserSignUp(email, password);
      if (res) {
        nav('/');
      }
    } catch (e) {
      alert(e.response.data.message);
    }
  };

  const toLogin = e => {
    nav('/');
  };

  useEffect(() => {
    if (GetTokenInStorage()) {
      nav('/todo');
    }
  }, []);

  return (
    <LoginForm.Container>
      <LoginForm.Title>회원가입</LoginForm.Title>
      <LoginForm.InputDiv>
        <LoginForm.InputTitle error={false}>이메일</LoginForm.InputTitle>
        <LoginForm.ErrorSpan>
          {emailError && '유효하지 않은 이메일 주소입니다.'}
        </LoginForm.ErrorSpan>
      </LoginForm.InputDiv>
      <LoginForm.Input
        onChange={handleEmailChange}
        type="string"
        ref={emailRef}
        placeholder="이메일 주소를 입력하세요."
        error={emailError}
      />
      <LoginForm.InputDiv>
        <LoginForm.InputTitle error={false}>비밀번호</LoginForm.InputTitle>
        <LoginForm.ErrorSpan>
          {pswError && '비밀번호는 8자리 이상이여야합니다.'}
        </LoginForm.ErrorSpan>
      </LoginForm.InputDiv>
      <LoginForm.Input
        onChange={handlePasswordChange}
        type="password"
        ref={passwordRef}
        placeholder="비밀번호는 8자리 이상이여야합니다."
        error={pswError}
      />
      <LoginForm.Atagbox>
        <LoginForm.Graytext>
          이미 가입하셨나요?
          <LoginForm.Atag onClick={toLogin}>로그인하기</LoginForm.Atag>
        </LoginForm.Graytext>
      </LoginForm.Atagbox>
      <LoginForm.Button onClick={handleClick} disabled={btnactive}>
        회원가입하기
      </LoginForm.Button>
    </LoginForm.Container>
  );
}

export default Signin;
