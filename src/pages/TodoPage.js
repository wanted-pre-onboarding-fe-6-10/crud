import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { GetTokenInStorage } from '../utils/Localstorage';
import { todoAPI } from '../api/todoApi';
import TodoList from '../components/Todo/TodoList';
import { Container, Input, Title, Button } from '../components/Todo/TodoForm';

export default function Todo() {
  const nav = useNavigate();
  const [todos, setTodos] = useState();
  const inputRef = useRef(null);
  const todoApi = new todoAPI();

  const ClickHandler = async () => {
    const todo = inputRef.current?.value.toString();
    if (todo) {
      const newTodo = { todo: todo };
      const res = await todoApi.createTodo(newTodo);
      inputRef.current.value = '';
      if (res) {
        Getdata();
      }
    }
  };

  async function Getdata() {
    const data = await todoApi.getTodos();
    setTodos(() => data);
  }

  useEffect(() => {
    if (!GetTokenInStorage()) {
      nav('/');
    } else {
      Getdata();
    }
  }, [nav]);

  return (
    <div>
      <Container>
        <Title>Todo List</Title>
        <Input ref={inputRef} />
        <Button
          onClick={e => {
            ClickHandler();
          }}
        >
          등록
        </Button>
        {todos && <TodoList todos={todos} Getdata={Getdata} />}
      </Container>
    </div>
  );
}
