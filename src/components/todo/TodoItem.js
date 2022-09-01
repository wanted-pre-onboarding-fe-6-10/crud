import React from 'react';
import styled, { css } from 'styled-components';
import Button from '../common/Button';
import { useTodoHook } from '../../hoc/useTodoHook';
import Input from '../common/Input';

function TodoItem({ todo }) {
  const {
    onDeleteTodo,
    onUpdateToggle,
    updateToggle,
    updateText,
    onChangeUpdate,
    onUpdateTodo,
    onCheckTodo,
  } = useTodoHook();
  return (
    <TodoItemBlock>
      <CheckCircle
        done={todo.isCompleted}
        onClick={() => onCheckTodo(todo.todo, todo.isCompleted, todo.id)}
      />
      {!updateToggle ? (
        <>
          <Text>{todo.todo}</Text>
          <ButtonMarginRight inItemStyle onClick={onUpdateToggle}>
            수정
          </ButtonMarginRight>
          <Button inItemStyle onClick={() => onDeleteTodo(todo.id)}>
            삭제
          </Button>
        </>
      ) : (
        <>
          <UpdateInput type="text" value={updateText} onChange={onChangeUpdate} />
          <Button inItemStyle onClick={() => onUpdateTodo(updateText, todo.isCompleted, todo.id)}>
            수정
          </Button>
        </>
      )}
    </TodoItemBlock>
  );
}

export default TodoItem;

const TodoItemBlock = styled.div`
  display: flex;
  align-items: center;
  padding-top: 12px;
  padding-bottom: 12px;
`;
const CheckCircle = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 16px;
  border: 1px solid #ced4da;
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  cursor: pointer;
  ${props =>
    props.done &&
    css`
      border: 1px solid #38d9a9;
      color: #38d9a9;
    `}
`;

const Text = styled.div`
  flex: 1;
  font-size: 21px;
  color: #495057;
  ${props =>
    props.done &&
    css`
      color: #ced4da;
    `}
`;

const ButtonMarginRight = styled(Button)`
  margin-right: 1rem;
`;

const UpdateInput = styled(Input)`
  width: 70%;
  margin-right: 1rem;
`;
