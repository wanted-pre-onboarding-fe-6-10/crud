import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { LoginForm, SignupForm } from '../components/Main';
import { checkTokenExists } from '../utils/utils';

const Container = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
`;

export const MainPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();

  // Assignment3
  useEffect(() => {
    if (checkTokenExists()) navigate('/todo', { replace: true });
  }, []);

  useEffect(() => {
    setIsLogin(location.pathname === '/login');
  }, [location.pathname]);

  return <Container>{isLogin ? <LoginForm /> : <SignupForm />}</Container>;
};
