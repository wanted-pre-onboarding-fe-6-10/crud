import React from 'react';

import styled from 'styled-components';
import { useTodoHook } from '../../hoc/useTodoHook';
import TodoItem from './TodoItem';

function TodoList() {
  const { todos } = useTodoHook();
  return (
    <TodoListBlock>
      {todos.map(todo => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </TodoListBlock>
  );
}

export default TodoList;

const TodoListBlock = styled.div`
  min-height: 320px;
  max-height: 513px;
  overflow-y: auto;
`;
