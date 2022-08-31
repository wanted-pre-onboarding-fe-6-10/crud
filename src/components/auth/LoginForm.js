import React from 'react';
import styled from 'styled-components';
import Button from '../common/Button';
import Input from '../common/Input';
import { useAuthHook } from '../../hoc/useAuthHook';
import { Link } from 'react-router-dom';

function LoginForm() {
  const { email, password, onChange, onCheckEmail, error, onSignin } =
    useAuthHook();
  return (
    <LoginFormBlock>
      <h3>로그인</h3>
      <form>
        <Input
          type="email"
          name="email"
          value={email}
          placeholder="이메일을 입력해주세요"
          onKeyUp={onCheckEmail}
          onChange={onChange}
        />
        <InputMarginTop
          type="password"
          name="password"
          value={password}
          placeholder="비밀번호를 입력해주세요"
          onChange={onChange}
        />
        <ButtonMarginTop
          fullWidth
          disabled={error}
          type="button"
          onClick={() => onSignin(email, password)}
        >
          로그인
        </ButtonMarginTop>
      </form>
      <Footer>
        <Link to="/register">회원가입</Link>
      </Footer>
    </LoginFormBlock>
  );
}

export default LoginForm;

const LoginFormBlock = styled.div`
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

  &:disabled {
    background-color: #343a40;
  }
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
