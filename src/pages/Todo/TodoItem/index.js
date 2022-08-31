import React from 'react';
import { Checkbox, IconButton, ListItemText } from '@material-ui/core';
import { Grid, Paper } from '@material-ui/core';
import { Clear, Create } from '@material-ui/icons';
import swal from 'sweetalert';
import S from './style';

async function deleteTodo(id) {
  const token = localStorage.getItem('access_token');
  return fetch(
    'https://n38lcff1wk.execute-api.ap-northeast-2.amazonaws.com/todos/' + id,
    {
      method: 'DELETE',
      headers: {
        Authorization: 'Bearer ' + token,
      },
    }
  ).then(data => {
    return data;
  });
}

async function updateTodo(todo) {
  const token = localStorage.getItem('access_token');
  return fetch(
    'https://n38lcff1wk.execute-api.ap-northeast-2.amazonaws.com/todos/' +
      todo.id,
    {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token,
      },
      body: JSON.stringify({
        isCompleted: todo.isCompleted,
        todo: todo.todo,
      }),
    }
  ).then(data => {
    return data;
  });
}

function Todo(prop) {
  let todo = prop.todo;
  const handleDelete = async e => {
    e.preventDefault();
    await deleteTodo(todo.id);
    prop.fetchTodo();
    swal('삭제되었습니다.', '삭제된 TODO: ' + todo.todo, 'success');
  };

  const handleCheck = async e => {
    e.preventDefault();

    await updateTodo({
      ...todo,
      isCompleted: !todo.isCompleted,
    });
    prop.fetchTodo();
  };

  const handleChange = async e => {
    e.preventDefault();

    swal({
      title: 'TODO변경',
      content: {
        element: 'input',
        attributes: {
          placeholder: '변경할 todo를 입력해주세요.',
          type: 'text',
        },
      },
      buttons: {
        cancel: {
          text: 'Cancel',
          value: null,
          visible: false,
          className: '',
          closeModal: true,
        },
        confirm: {
          text: 'OK',
          value: true,
          visible: true,
          className: '',
          closeModal: true,
        },
      },
    }).then(async inputValue => {
      if (inputValue === null) return false;

      if (inputValue === '') {
        swal('빈칸을 입력하셧습니다.');
        return false;
      }
      await updateTodo({
        ...todo,
        todo: inputValue,
      });
      prop.fetchTodo();
      swal('변경되었습니다.', 'You wrote: ' + inputValue, 'success');
    });
  };

  return (
    <Grid key={todo.id} xs={12} item>
      <S.Paper>
        <span>{todo.id}</span>
        <IconButton onClick={handleCheck}>
          <Checkbox tabIndex={-1} disableRipple checked={todo.isCompleted} />
        </IconButton>
        <ListItemText>{todo.todo}</ListItemText>
        <IconButton
          onClick={handleChange}
          color="secondary"
          aria-label="Delete"
        >
          <Create fontSize="small" />
        </IconButton>
        <IconButton
          onClick={handleDelete}
          color="secondary"
          aria-label="Delete"
        >
          <Clear fontSize="small" />
        </IconButton>
      </S.Paper>
    </Grid>
  );
}

export default Todo;
