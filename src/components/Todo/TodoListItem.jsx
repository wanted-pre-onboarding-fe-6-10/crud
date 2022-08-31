import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck as CheckIcon } from '@fortawesome/free-solid-svg-icons';
import { faCircleCheck as UncheckIcon } from '@fortawesome/free-regular-svg-icons';
import { Divider, Input, TextButton } from '../../commons';
import { deleteTodo, updateTodo } from '../../api/todoAPI';
import { useEffect, useState } from 'react';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0px 20px;
  margin: 10px 0px;
`;

const ButtonGroup = styled.span`
  display: flex;
  align-items: center;
  flex-direction: row;
`;

const Content = styled.text`
  color: gray;
  font-family: 'Verdana';
`;

export const TodoListItem = ({ item, refreshList }) => {
  const [placeholer, setPlaceholder] = useState(item.todo);
  const [isCompleted, setIsCompleted] = useState(item.isCompleted);
  const [content, setContent] = useState(item.todo);
  const [isEdit, setIsEdit] = useState(false);

  const toggleComplete = async () => {
    const response = await updateTodo(item.id, content, !isCompleted);
    console.log(response);
    setIsCompleted(response.data.isCompleted);
  };

  const editItem = async () => {
    if (isEdit) {
      const response = await updateTodo(item.id, content, isCompleted);
      console.log(content);
    }
    setIsEdit(!isEdit);
    setPlaceholder(content);
  };

  const removeItem = async () => {
    let confirm = window.confirm('정말 삭제하시겠습니까?');
    if (confirm) {
      const response = await deleteTodo(item.id);
      // console.log(response);
      if (response.status === 204) refreshList();
      else alert(response.data.message);
    }
  };

  useEffect(() => {}, [isEdit]);

  return (
    <>
      <Container>
        <ButtonGroup onClick={toggleComplete}>
          {isCompleted ? (
            <FontAwesomeIcon icon={CheckIcon} size="lg" />
          ) : (
            <FontAwesomeIcon icon={UncheckIcon} size="lg" />
          )}
          <Divider />
          <Divider />
          {isEdit ? (
            <Input
              placeholder={placeholer}
              value={content}
              onChange={e => setContent(e.target.value)}
              onClick={e => e.stopPropagation()}
            />
          ) : (
            <Content>{content}</Content>
          )}
        </ButtonGroup>
        <ButtonGroup>
          <TextButton onClick={editItem}>수정</TextButton>
          <TextButton onClick={removeItem}>삭제</TextButton>
        </ButtonGroup>
      </Container>
    </>
  );
};
