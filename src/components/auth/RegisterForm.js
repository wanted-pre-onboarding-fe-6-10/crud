import React from 'react';
import styled from 'styled-components';
import Button from '../common/Button';
import Input from '../common/Input';
import { useAuthHook } from '../../hoc/useAuthHook';
import { Link } from 'react-router-dom';

function RegisterForm() {
  const { email, password, onChange, onCheckEmail, error, onSignUp } =
    useAuthHook();
  return (
    <RegisterFormBlock>
      <h3>회원가입</h3>
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
          onClick={() => onSignUp(email, password)}
        >
          회원가입
        </ButtonMarginTop>
      </form>
      <Footer>
        <Link to="/">로그인</Link>
      </Footer>
    </RegisterFormBlock>
  );
}

export default RegisterForm;

const RegisterFormBlock = styled.div`
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
