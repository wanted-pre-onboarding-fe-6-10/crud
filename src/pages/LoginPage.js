import styled from 'styled-components';
import React, { useState, useRef, useEffect, useCallback } from 'react';
import * as LoginForm from '../components/LoginForm';
import { useNavigate } from 'react-router-dom';
import * as vaildation from '../utils/Validation';
import { UserSignIn } from '../services/userApi';
import { SetTokenInStorage, GetTokenInStorage } from '../utils/Localstorage';

const Container = styled.div`
  background-color: #fff;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  width: 100%;
  padding: 39px 62px 30px 60px;
  box-shadow: 0px 1px 6px rgba(0, 0, 0, 0.12);
  border-radius: 7px;
  min-width: 500px;
`;
const Atagbox = styled.div`
  margin-top: 24px;
  margin-bottom: 8px;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

function Login() {
  const nav = useNavigate();
  const regEmail = vaildation.regEmail;
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const [emailError, setEmailError] = useState(false);
  const [pswError, setPswError] = useState(false);
  const [btnError, setbtnError] = useState(true);
  const btnactive =
    emailError === true || pswError === true || btnError === true;
  const handleEmailChange = e => {
    if (
      regEmail.test(emailRef.current.value) !== true &&
      emailRef.current.value.length >= 1
    ) {
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
    if (
      passwordRef.current.value.length < 8 &&
      passwordRef.current.value.length >= 1
    ) {
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
    const data = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };
    try {
      const res = await UserSignIn(data);
      const token = res.access_token;
      SetTokenInStorage(token);
      ToTodoPage();
    } catch (e) {
      alert(e.response.data.message);
    }
  };

  const toSigninPage = e => {
    nav('/signin');
  };

  const ToTodoPage = useCallback(() => {
    if (GetTokenInStorage()) {
      nav('/todo');
    }
  }, [nav]);

  useEffect(() => {
    ToTodoPage();
  }, [ToTodoPage]);
  return (
    <Container>
      <LoginForm.Title>로그인</LoginForm.Title>
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
      <Atagbox>
        <LoginForm.Graytext>
          처음이신가요?
          <LoginForm.Atag onClick={toSigninPage}>가입하기</LoginForm.Atag>
        </LoginForm.Graytext>
      </Atagbox>
      <LoginForm.Button onClick={handleClick} disabled={btnactive}>
        로그인하기
      </LoginForm.Button>
    </Container>
  );
}

export default Login;
