import React from 'react';
import TodoInsert from '../components/todo/TodoInsert';
import TodoList from '../components/todo/TodoList';
import TodoTemplate from '../components/todo/TodoTemplate';

function TodoPage() {
  return (
    <TodoTemplate>
      <TodoInsert />
      <TodoList />
    </TodoTemplate>
  );
}

export default TodoPage;
