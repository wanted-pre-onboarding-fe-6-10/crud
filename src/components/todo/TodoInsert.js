import React from 'react';
import styled from 'styled-components';
import Button from '../common/Button';
import Input from '../common/Input';

function TodoInsert() {
  return (
    <TodoInsertForm>
      <InsertStyle type="text" />
      <Button>+</Button>
    </TodoInsertForm>
  );
}

export default TodoInsert;

const TodoInsertForm = styled.form`
  display: flex;
`;
const InsertStyle = styled(Input)`
  margin-right: 1rem;
`;
