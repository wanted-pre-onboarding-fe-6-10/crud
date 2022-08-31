import React from 'react';
import styled, { css } from 'styled-components';
import { MdDone } from 'react-icons/md';
import Button from '../common/Button';

function TodoItem() {
  return (
    <TodoItemBlock>
      <CheckCircle />
      <MdDone />
      <Text>111</Text>
      <ButtonMarginRight inItemStyle>수정</ButtonMarginRight>
      <Button inItemStyle>삭제</Button>
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
