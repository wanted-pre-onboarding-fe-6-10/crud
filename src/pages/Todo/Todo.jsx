import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import { Title, TitleWrapper, TodoBox, TodoContainer } from '../../styles/authstyle';
import CreateTodo from './CreateTodo';
import TodoList from './TodoList';
import { createTodo, deleteTodo, getTodo, updateTodo } from './../../api/axios';

function Todo() {
  const token = localStorage.getItem('accessToken');
  const [todo, setTodo] = useState('');
  const [getList, setGetList] = useState(false);
  const [todoList, setTodoList] = useState();

  const onChange = e => {
    setTodo(e.target.value);
  };
  const getTodos = () => {
    getTodo()
      .then(res => {
        console.log(res);
        if (res.status === 200) {
          setTodoList(res.data);
          setGetList(true);
        }
      })
      .catch(err => console.log(err));
  };
  const onCreate = e => {
    e.preventDefault();
    createTodo({ todo }).then(res => {
      console.log(res);
      getTodos();
      setTodo('');
    });
  };

  const onUpdate = (type, taskId, content, completion) => {
    if (type === 'checkbox') {
      updateTodo({ todo: content, isCompleted: completion, id: taskId }).then(res => {
        console.log(res);
        getTodos();
        Swal.fire('수정완료', '완료처리하였습니다.', 'success');
      });
    } else if (type === 'text') {
      updateTodo({ todo: content, isCompleted: completion, id: taskId }).then(res => {
        console.log(res);
        getTodos();
        Swal.fire('수정완료', '할 일을 수정했습니다.', 'success');
      });
    }
  };

  const onRemove = taskId => {
    Swal.fire({
      title: '삭제요청',
      text: '할 일을 삭제하시겠습니까?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: '확인',
      cancelButtonText: '취소',
    }).then(res => {
      if (res.isConfirmed) {
        deleteTodo(taskId).then(res => {
          console.log(res);
          getTodos();
          Swal.fire('삭제완료', '할 일을 삭제했습니다.', 'warning');
        });
      }
    });
  };

  useEffect(() => {
    if (!getList) {
      getTodos();
    }
  }, [todoList]);

  return (
    <TodoContainer>
      <TitleWrapper>
        <Title>TodoList</Title>
      </TitleWrapper>
      <TodoBox>
        <CreateTodo todo={todo} onChange={onChange} onCreate={onCreate} />
        <TodoList todos={todoList} onRemove={onRemove} onTodoChange={onUpdate} />
      </TodoBox>
    </TodoContainer>
  );
}

export default Todo;
