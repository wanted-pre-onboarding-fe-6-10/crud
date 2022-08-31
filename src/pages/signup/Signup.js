import { signUp } from '../../api/authAPI';
import AuthForm from '../../components/authFormStyle';

const Signup = () => {
  const SignupRequest = async signupValue => {
    const response = await signUp(signupValue);
    if (response.status === 400) {
      alert('동일한 이메일이 이미 존재합니다.');
    } else {
      alert('회원가입 성공');
    }
  };

  return (
    <AuthForm title="회원가입" submitRequest={SignupRequest} btnText="up" />
  );
};

export default Signup;
