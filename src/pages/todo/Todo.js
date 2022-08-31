/* eslint-disable*/ 

import * as S from './TodoStyles';
import { useState, useEffect } from 'react';
import { APP_API } from '../../config';
import TodoItem from './todoitem/TodoItem';
import { useNavigate, useLocation } from 'react-router-dom';

const Todo = () => {
  const [todoText, setTodoText] = useState('');
  const [todoArr, setTodoArr] = useState([]);
  const getToken = localStorage.getItem('access_token');

  const location = useLocation().pathname;
  const navigate = useNavigate();



  useEffect(() => {
    if (!getToken && location === '/todo') {
      navigate('/');
    }
  }, []);

  useEffect(() => {
    if (!getToken) {
      return;
    }
    fetch(`${APP_API.todo}`, {
      headers: {
        Authorization: `Bearer ${getToken}`,
      },
    })
      .then(res => res.json())
      .then(result => {
        setTodoArr(result);
      });
  }, [getToken]);

  const todoPost = async () => {
    const res = await fetch(`${APP_API.todo}`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${getToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        todo: todoText,
      }),
    });

    await fetch(`${APP_API.todo}`, {
      headers: {
        Authorization: `Bearer ${getToken}`,
      },
    })
      .then(res => res.json())
      .then(result => {
        setTodoArr(result);
      });

    setTodoText('');
  };

  return (
    <>
      <S.H1>Todo List</S.H1>
      <S.TodoWrapper>
        <S.TodoTop>
          <input
            type="text"
            value={todoText}
            onChange={e => setTodoText(e.target.value)}
          />
          <button type="button" onClick={todoPost}>
            추가
          </button>
        </S.TodoTop>
        <S.TodoBody>
          {todoArr?.map(data => (
            <TodoItem
              key={data.id}
              id={data.id}
              isCompleted={data.isCompleted}
              todoContent={data.todo}
              setTodoArr={setTodoArr}
            />
          ))}
        </S.TodoBody>
      </S.TodoWrapper>
    </>
  );
};

export default Todo;
