import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { GetTokenInStorage } from '../utils/Localstorage';
import { createTodo, getTodos } from '../api/todoApi';
import TodoList from '../components/Todo/TodoList';
import { Container, Input, Title, Button } from '../components/Todo/TodoForm';

export default function Todo() {
  const [todos, setTodos] = useState();
  const inputRef = useRef(null);

  const ClickHandler = async () => {
    const todo = inputRef.current?.value.toString();
    if (todo) {
      const res = await createTodo(todo);
      inputRef.current.value = '';
      if (res) {
        Getdata();
      }
    }
  };

  async function Getdata() {
    const data = await getTodos();
    setTodos(() => data.data);
  }

  // useEffect(() => {
  //   Getdata();
  // }, []);

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
