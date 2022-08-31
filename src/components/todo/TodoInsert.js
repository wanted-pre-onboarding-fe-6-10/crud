import React from 'react';
import styled from 'styled-components';
import { useTodoHook } from '../../hoc/useTodoHook';
import Button from '../common/Button';
import Input from '../common/Input';

function TodoInsert() {
  const { inputTodo, onChange, onCreateTodo } = useTodoHook();
  return (
    <TodoInsertForm>
      <InsertStyle
        type="text"
        value={inputTodo}
        placeholder="할 일을 입력해주세요"
        onChange={onChange}
      />
      <Button type="button" onClick={() => onCreateTodo(inputTodo)}>
        +
      </Button>
    </TodoInsertForm>
  );
}

export default TodoInsert;

const TodoInsertForm = styled.div`
  display: flex;
`;
const InsertStyle = styled(Input)`
  margin-right: 1rem;
`;
