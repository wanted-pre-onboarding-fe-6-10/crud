/* eslint-disable*/ 
import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

import { APP_API } from '../../config';
import * as S from '../../components/authFormStyle';
import { Button } from 'antd';
import 'antd/dist/antd.css';

const LogIn = () => {
  const [signinValue, setSigninValue] = useState({ email: '', password: '' });

  const navigate = useNavigate();
  const location = useLocation().pathname;
  const isValid =
    signinValue.email.includes('@') && signinValue.password.length >= 8;

  useEffect(() => {
    if (localStorage.getItem('access_token') && location === '/') {
      navigate('/todo');
    }
  }, []);

  const signInRequest = e => {
    console.log(1)
    e.preventDefault();

    fetch(`${APP_API.signin}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: signinValue.email,
        password: signinValue.password,
      }),
    })
      .then(res => res.json())
      .then(result => {
        if (result.message === 'Unauthorized' || result.error === 'Not Found') {
          alert('해당 사용자가 존재하지 않습니다.');
          return;
        }

        localStorage.setItem('access_token', result.access_token);
        alert('로그인 성공');
        navigate('/todo');
      })
  };
  const goToSignUp = ()=>{
  navigate('/signup')
  }
  return (
    <>
    <S.Wrapper>
      <S.h1>로그인</S.h1>
      <S.Form onSubmit={signInRequest}>
        <S.LabelWrapper>
          <S.Label>
            <span>email</span>
            <S.InputBox
              inputType="email"
              name="email"
              placeholder="@포함 입력"
              value={signinValue.email}
              onChange={e =>
                setSigninValue(prev => ({ ...prev, email: e.target.value }))
              }
            />
          </S.Label>
          <S.Label>
            <span>Password</span>
            <S.InputBox
              inputType="password"
              name="password"
              length="8"
              placeholder="8자리 이상"
              value={signinValue.password}
              onChange={e =>
                setSigninValue(prev => ({ ...prev, password: e.target.value }))
              }
            />
          </S.Label>
        </S.LabelWrapper>
        <S.ButtonAria>
        <Button htmlType="submit" disabled={!isValid} type="primary">Log in</Button>
        <Button type="primary" onClick={() => goToSignUp()} >sign up</Button>
        </S.ButtonAria>
      </S.Form>
      </S.Wrapper>
    </>
  );
};



export default LogIn;
