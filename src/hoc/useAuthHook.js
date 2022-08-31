import { useState, useEffect } from 'react';
import { signIn, signUp } from '../api/authAPI';
export function useAuthHook() {
  const [inputs, setInputs] = useState({
    email: '',
    password: '',
  });
  const [emailError, setEmailError] = useState(false);
  const [error, setError] = useState(false);

  const { email, password } = inputs;

  //email validation
  const onCheckEmail = () => {
    const reg =
      /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    if (!reg.test(email)) {
      setEmailError(false);
    } else {
      setEmailError(true);
    }
  };

  useEffect(() => {
    if (email === '' || password.length < 8 || emailError === false) {
      setError(true);
    } else {
      setError(false);
    }
  }, [email, password, emailError]);

  const onChange = e => {
    const { value, name } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const onSignin = async (email, password) => {
    const response = await signIn(email, password);
    localStorage.setItem('token', response.data.access_token);

    if (response.status === 200) {
      window.location.replace('/todo');
    }
  };

  const onSignUp = async (email, password) => {
    const response = await signUp(email, password);
    localStorage.setItem('token', response.data.access_token);

    if (response.status === 201) {
      window.location.replace('/todo');
    }
  };

  return {
    email,
    password,
    onChange,
    onCheckEmail,
    error,
    onSignin,
    onSignUp,
  };
}
