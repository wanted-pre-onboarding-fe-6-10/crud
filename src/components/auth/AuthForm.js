import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../common/Button';
import Input from '../common/Input';

const textMapping = {
  login: '로그인',
  register: '회원가입',
};
function AuthForm({ type }) {
  const text = textMapping[type];
  return (
    <AuthFormBlock>
      <h3>{text}</h3>
      <form>
        <Input type="email" placeholder="이메일을 입력해주세요" />
        <InputMarginTop type="password" placeholder="비밀번호를 입력해주세요" />
        <ButtonMarginTop fullWidth>{text}</ButtonMarginTop>
      </form>
      <Footer>
        {type === 'login' ? (
          <Link to="/register">회원가입</Link>
        ) : (
          <Link to="/">로그인</Link>
        )}
      </Footer>
    </AuthFormBlock>
  );
}

export default AuthForm;

const AuthFormBlock = styled.div`
  h3 {
    margin: 0;
    color: #343a40;
    margin-bottom: 1rem;
  }
`;
const InputMarginTop = styled(Input)`
  margin-top: 1rem;
`;

const ButtonMarginTop = styled(Button)`
  margin-top: 1rem;
`;
const Footer = styled.div`
  margin-top: 2rem;
  text-align: right;

  a {
    color: #868e96;
    text-decoration: underline;

    &:hover {
      color: #212529;
    }
  }
`;
