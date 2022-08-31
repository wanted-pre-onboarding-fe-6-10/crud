import * as S from './TodoStyles';
import { useState, useEffect } from 'react';
import TodoItem from './todoitem/TodoItem';
import { getTodos, createTodo } from '../../api/todoAPI';

const Todo = () => {
  const [todoText, setTodoText] = useState('');
  const [todoData, setTodoData] = useState([]);

  const getList = async () => {
    const response = await getTodos();
    if (response) {
      setTodoData(response.data);
    }
  };

  useEffect(() => {
    getList();
  }, []);

  const todoPost = async () => {
    const response = await createTodo(todoText);
    if (response.status === 201) {
      setTodoData(prev => [...prev, response.data]);
      setTodoText('');
    }
  };

  return (
    <>
      <h1>Todo List</h1>
      <S.TodoWrapper>
        <S.TodoTop>
          <input
            type="text"
            value={todoText}
            onChange={e => setTodoText(e.target.value)}
          />
          <button type="button" onClick={todoPost}>
            add
          </button>
        </S.TodoTop>
        <S.TodoBody>
          {todoData?.map(data => (
            <TodoItem
              key={data.id}
              id={data.id}
              isCompleted={data.isCompleted}
              todoContent={data.todo}
              setTodoData={setTodoData}
            />
          ))}
        </S.TodoBody>
      </S.TodoWrapper>
    </>
  );
};

export default Todo;
