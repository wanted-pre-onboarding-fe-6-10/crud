import React from 'react';
import AuthForm from '../components/auth/AuthForm';
import AuthTemplate from '../components/auth/AuthTemplate';

function LoginPage() {
  return (
    <AuthTemplate>
      <AuthForm type="login" />
    </AuthTemplate>
  );
}

export default LoginPage;
