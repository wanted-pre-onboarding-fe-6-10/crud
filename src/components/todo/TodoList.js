import React from 'react';

import styled from 'styled-components';
import TodoItem from './TodoItem';

function TodoList() {
  return (
    <TodoListBlock>
      <TodoItem />
      <TodoItem />
      <TodoItem />
      <TodoItem />
      <TodoItem />
    </TodoListBlock>
  );
}

export default TodoList;

const TodoListBlock = styled.div`
  min-height: 320px;
  max-height: 513px;
  overflow-y: auto;
`;
