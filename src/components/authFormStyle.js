import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import * as S from './FormStyles';

const AuthForm = ({ title, submitRequest, btnText = 'in' }) => {
  const [userValue, setUserValue] = useState({ email: '', password: '' });

  const isValid =
    userValue.email.includes('@') && userValue.password.length >= 8;

  const onSubmit = e => {
    e.preventDefault();
    submitRequest(userValue);
  };

  return (
    <>
      <h1>{title}</h1>
      <S.Form onSubmit={onSubmit}>
        <S.LabelWrapper>
          <S.Label>
            <span>email</span>
            <input
              type="email"
              placeholder="@포함"
              value={userValue.eamil}
              required
              onChange={e =>
                setUserValue(prev => ({ ...prev, email: e.target.value }))
              }
            />
          </S.Label>

          <S.Label>
            <span>password</span>
            <input
              type="password"
              placeholder="8자리 이상"
              required
              minLength={8}
              value={userValue.eamil}
              onChange={e =>
                setUserValue(prev => ({ ...prev, password: e.target.value }))
              }
            />
          </S.Label>
        </S.LabelWrapper>

        <S.SubmitBtn disabled={!isValid}>sign {btnText}</S.SubmitBtn>

        <Link to={`${btnText === 'in' ? '/signup' : '/'}`}>
          go to sign {btnText === 'in' ? 'up' : 'in'}
          <S.GotoBtn>sign {btnText === 'in' ? 'up' : 'in'}</S.GotoBtn>
        </Link>
      </S.Form>
    </>
  );
};

export default AuthForm;
