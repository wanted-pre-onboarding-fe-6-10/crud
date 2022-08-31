import { useState } from 'react';
import Swal from 'sweetalert2';
import Input from '../../components/Input';
import {
  ButtonWrapper,
  Container,
  Form,
  FormWrapper,
  Img,
  ImgWrapper,
  InputTitle,
  LoginBox,
  Title,
  TitleWrapper,
  InputWrapper,
  Button,
  AlertBox,
  Alert,
} from '../../styles/authstyle';
import { signIn, signUp } from '../../api/axios';

function Login() {
  const [email, setEmail] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [password, setPassword] = useState('1');
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const [isValidUser, setIsValidUser] = useState(false);
  const [wantSignup, setWantSignup] = useState(false);
  const onSubmit = e => {
    e.preventDefault();
    const data = JSON.stringify({ email, password });
    if (!wantSignup) {
      signIn(data)
        .then(res => {
          console.log(res);
          if (res.status === 200) {
            localStorage.setItem('accessToken', res.data.access_token);
            setIsValidUser(true);
            window.location.reload();
          }
        })
        .catch(res => {
          const status = res.response.data.statusCode;
          if (status === 401) {
            setPassword('');
            if (isValidUser) {
              Swal.fire('비밀번호 오류', '비밀번호가 맞지 않습니다. 다시 입력해주세요.', 'error');
            } else {
              setIsValidUser(true);
            }
          } else if (status === 404) {
            Swal.fire({
              title: '없는 사용자',
              text: '가입한 적 없는 이메일입니다. 회원가입하시겠습니까?',
              icon: 'question',
              showCancelButton: true,
              confirmButtonColor: '#3085d6',
              cancelButtonColor: '#d33',
              confirmButtonText: '가입',
              cancelButtonText: '취소',
            }).then(res => {
              if (res.isConfirmed) {
                // 회원가입 로직 작성
                setPassword('');
                setWantSignup(true);
              }
            });
          }
        });
    } else {
      signUp(data)
        .then(res => {
          console.log(res);
          if (res.data.access_token !== undefined) {
            localStorage.setItem('accessToken', res.data.access_token);
            Swal.fire('가입성공', '회원가입에 성공하셨습니다.', 'success').then(res => {
              if (res.isConfirmed) {
                window.location.reload();
              }
            });
          }
        })
        .catch(res => {
          console.log(res);
          const response = res.response.data;
          if (response.statusCode === 400) {
            Swal.fire('가입실패', `${response.message} 다시 회원가입해주세요.`, 'error');
          } else {
            Swal.fire('가입실패', '회원가입에 실패하셨습니다. 다시 회원가입해주세요.', 'error');
            window.location.reload();
          }
        });
    }
  };
  const onChangeEmail = e => {
    setEmail(e.target.value);
    const emailRegex = /^[a-zA-Z0-9+-\_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    if (emailRegex.test(e.target.value)) {
      setIsEmailValid(true);
    } else {
      setIsEmailValid(false);
    }
  };

  const onChangePassword = e => {
    setPassword(e.target.value);
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@!%*#?&])[A-Za-z\d@!%*#?&]{8,}$/;
    if (passwordRegex.test(e.target.value)) {
      setIsPasswordValid(true);
    } else {
      setIsPasswordValid(false);
    }
  };
  return (
    <Container>
      <LoginBox>
        <TitleWrapper>{wantSignup ? <Title>Signup</Title> : <Title>Login</Title>}</TitleWrapper>
        <FormWrapper>
          <Form onSubmit={onSubmit}>
            {isValidUser ? (
              wantSignup ? null : (
                !isValidUser && (
                  <InputWrapper>
                    <InputTitle>이메일</InputTitle>
                    <Input type="text" value={email} onChange={onChangeEmail} />
                    <AlertBox>
                      {email ? (
                        !isEmailValid && <Alert>이메일 양식을 지켜주세요.</Alert>
                      ) : (
                        <Alert>이메일을 입력해주세요.</Alert>
                      )}
                    </AlertBox>
                  </InputWrapper>
                )
              )
            ) : (
              <InputWrapper>
                <InputTitle isValid={!isValidUser} isWanted={wantSignup}>
                  이메일
                </InputTitle>
                <Input type="text" value={email} onChange={onChangeEmail} />
              </InputWrapper>
            )}
            {isValidUser || wantSignup ? (
              <InputWrapper>
                <InputTitle isValid={isValidUser}>비밀번호</InputTitle>
                <Input type="password" value={password} onChange={onChangePassword} />
                {isValidUser ? null : (
                  <AlertBox isValid={isValidUser}>
                    {password ? (
                      !isPasswordValid && (
                        <Alert>
                          비밀번호는 최소 8자, 문자와 숫자 그리고 특수 문자가 최소한 하나씩 있어야
                          합니다.
                        </Alert>
                      )
                    ) : (
                      <Alert>비밀번호를 입력해주세요.</Alert>
                    )}
                  </AlertBox>
                )}
              </InputWrapper>
            ) : null}
            <ButtonWrapper>
              {wantSignup ? (
                <Button>Singup</Button>
              ) : isValidUser ? (
                isEmailValid && <Button>Login</Button>
              ) : (
                isEmailValid && <Button>Email로 계속하기</Button>
              )}
            </ButtonWrapper>
          </Form>
        </FormWrapper>
        <ImgWrapper>
          <Img />
        </ImgWrapper>
      </LoginBox>
    </Container>
  );
}
export default Login;
