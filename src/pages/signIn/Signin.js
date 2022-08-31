import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { signIn } from '../../api/authAPI';
import AuthForm from '../../components/authFormStyle';
import { ACCESS_TOKEN } from '../../const';

const SignIn = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem(ACCESS_TOKEN)) {
      navigate('/todo');
    }
  }, []);

  const singInRequest = async signinValue => {
    const response = await signIn(signinValue);

    if (response.status === 200) {
      localStorage.setItem(ACCESS_TOKEN, response.data.access_token);
      alert('로그인 성공');
      navigate('/todo');
    } else {
      alert('해당 사용자가 존재하지 않습니다.');
    }
  };

  return <AuthForm title="로그인" submitRequest={singInRequest} btnText="in" />;
};

export default SignIn;
