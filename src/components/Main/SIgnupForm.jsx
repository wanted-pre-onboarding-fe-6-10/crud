import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { signUp } from '../../api/authAPI';
import { Button, Divider, Input, TextButton, Title } from '../../commons';

const Row = styled.div`
  /* width: fit-content; */
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
`;

export const SignupForm = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [validEmail, setValidEmail] = useState(false);
  const [validPassword, setValidPassword] = useState(false);

  const join = async (email, password) => {
    const response = await signUp(email, password);
    // console.log(response);
    if (response.status === 201) {
      localStorage.setItem('access_token', response.data.access_token);
      navigate('/todo');
    } else {
      alert(response.data.message);
    }
  };

  useEffect(() => {
    setValidEmail(email.includes('@'));
  }, [email]);

  useEffect(() => {
    setValidPassword(password.length >= 8);
  }, [password]);

  return (
    <>
      <Title>회원가입</Title>
      <Input
        placeholder="이메일"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <Divider />
      <Input
        placeholder="비밀번호"
        value={password}
        type="password"
        onChange={e => setPassword(e.target.value)}
      />
      <Divider />
      <Row>
        <TextButton onClick={() => navigate('/login', { replace: true })}>
          이미 계정이 있다면? 로그인하기
        </TextButton>
        <Button
          onClick={() => join(email, password)}
          disabled={!validEmail || !validPassword}
        >
          회원가입
        </Button>
      </Row>
    </>
  );
};
