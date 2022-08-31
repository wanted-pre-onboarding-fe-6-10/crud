import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import swal from 'sweetalert';

const useStyles = makeStyles(theme => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: 'url(https://source.unsplash.com/random)',
    backgroundSize: 'cover',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

async function loginUser(credentials) {
  return fetch(
    'https://n38lcff1wk.execute-api.ap-northeast-2.amazonaws.com/auth/signin',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials),
    }
  ).then(data => data.json());
}

async function signUpUser(credentials) {
  return fetch(
    'https://n38lcff1wk.execute-api.ap-northeast-2.amazonaws.com/auth/signup',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials),
    }
  ).then(data => data.json());
}

export default function Signin() {
  const classes = useStyles();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginButton, setLoginButton] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async e => {
    e.preventDefault();
    const response = await loginUser({
      email,
      password,
    });
    if ('access_token' in response) {
      swal('Success', 'Todo페이지로 이동합니다.', 'success', {
        buttons: false,
        timer: 2000,
      }).then(value => {
        localStorage.setItem('access_token', response['access_token']);
        window.location.href = '/wanted-pre-onboarding-fe/todo';
      });
    } else {
      if (response.statusCode === 404) {
        swal({
          title: '해당 사용자가 없습니다.',
          text: '해당 정보로 회원가입 하시겠습니까?',
          icon: 'info',
          buttons: ['아니요', '네'],
        }).then(YES => {
          if (YES) {
            signUp();
          }
        });
      } else {
        swal('Failed', response.message || '', 'error');
      }
    }
  };

  const signUp = async () => {
    const response = await signUpUser({
      email,
      password,
    });
    if ('access_token' in response) {
      swal('Success', 'Todo페이지로 이동합니다.', 'success', {
        buttons: false,
        timer: 2000,
      }).then(value => {
        localStorage.setItem('access_token', response['access_token']);
        window.location.href = '/wanted-pre-onboarding-fe/todo';
      });
    } else {
      swal('Failed', response.message || '', 'error');
    }
  };

  const ActiveIsPassedLogin = () => {
    if (!email.includes('@')) {
      setErrorMessage('이메일에 @를 포함해주세요.');
      return setLoginButton(true);
    }
    if (password.length < 8) {
      setErrorMessage('패스워드는 8글자 이상입니다.');
      return setLoginButton(true);
    }
    setErrorMessage('');
    return setLoginButton(false);
  };

  return (
    <Grid container className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} md={7} className={classes.image} />
      <Grid item xs={12} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form className={classes.form} noValidate onSubmit={handleSubmit}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              name="email"
              label="Email Address"
              onChange={e => setEmail(e.target.value)}
              onKeyUp={ActiveIsPassedLogin}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="password"
              name="password"
              label="Password"
              type="password"
              onChange={e => setPassword(e.target.value)}
              onKeyUp={ActiveIsPassedLogin}
            />
            <Typography component="h1" variant="h5">
              {errorMessage}
            </Typography>
            <Button
              disabled={loginButton}
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign In
            </Button>
          </form>
        </div>
      </Grid>
    </Grid>
  );
}
