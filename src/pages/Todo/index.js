import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import TodoItem from './TodoItem';
import swal from 'sweetalert';
import S from './style';
async function setTodos(todo) {
  const token = localStorage.getItem('access_token');
  return fetch(
    'https://n38lcff1wk.execute-api.ap-northeast-2.amazonaws.com/todos',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token,
      },
      body: JSON.stringify(todo),
    }
  ).then(data => data.json());
}

async function getTodos() {
  const token = localStorage.getItem('access_token');
  return fetch(
    'https://n38lcff1wk.execute-api.ap-northeast-2.amazonaws.com/todos',
    {
      method: 'GET',
      headers: {
        Authorization: 'Bearer ' + token,
      },
    }
  )
    .then(data => {
      if (data.status !== 200) {
        swal({
          title: '오류가 발생했습니다.',
          text: '로그인 페이지로 돌아가시겠습니까?',
          icon: 'error',
          buttons: ['아니요(새로고침)', '네'],
        }).then(YES => {
          if (YES) {
            localStorage.removeItem('access_token');
            window.location.href = '/wanted-pre-onboarding-fe';
          } else {
            window.location.reload();
          }
        });
      }
      return data.json();
    })
    .catch(e => {});
}

export default function Profile() {
  const [todo, setTodo] = useState('');
  const [todoList, setTodoList] = useState([]);

  async function fetchTodo() {
    const data = await getTodos();
    setTodoList(data);
  }

  useEffect(() => {
    fetchTodo();
  }, []);

  const handleSubmit = async e => {
    e.preventDefault();
    await setTodos({
      todo,
    });

    await getTodos();
    setTodo('');
    fetchTodo();
  };

  const handleLogout = () => {
    localStorage.removeItem('access_token');
    window.location.href = '/wanted-pre-onboarding-fe';
  };

  return (
    <div>
      <AppBar position="sticky">
        <Toolbar>
          <S.TITLE>Todo</S.TITLE>
          <div>
            <Button onClick={handleLogout}>Logout</Button>
          </div>
        </Toolbar>
      </AppBar>
      <form onSubmit={handleSubmit} style={{ display: 'flex', margin: 10 }}>
        <TextField
          value={todo}
          onChange={e => setTodo(e.target.value)}
          sx={{ ml: 1, flex: 1 }}
          placeholder="TODO"
          inputProps={{
            'aria-label': 'Description',
          }}
          style={{ width: '89%', marginRight: '1%' }}
          variant="outlined"
          required
        />
        <Button
          type="submit"
          variant="outlined"
          color="primary"
          style={{ width: '10%' }}
        >
          Add
        </Button>
      </form>
      <Grid container>
        {todoList &&
          todoList.map(ele => {
            return <TodoItem key={ele.id} todo={ele} fetchTodo={fetchTodo} />;
          })}
      </Grid>
    </div>
  );
}
