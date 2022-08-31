import React, { useState } from 'react';
import * as S from './TodoItemStyles';
import { updateTodo, deleteTodo } from '../../../api/todoAPI';

const TodoItem = ({ id, isCompleted, todoContent, setTodoData }) => {
  const [isEditMode, setIsEditMode] = useState(false);
  const [editText, setEditText] = useState(todoContent);
  let isClear = isCompleted;

  const deleteRequest = async () => {
    const response = await deleteTodo(id);
    if (response.status === 204) {
      setTodoData(prev => prev.filter(data => data.id !== id));
    }
  };

  const editRequest = async editContent => {
    const postText = editContent || todoContent;
    const response = await updateTodo(id, postText, isClear);

    if (response.status === 200) {
      setTodoData(prev =>
        prev.map(data => {
          if (data.id === response.data.id) {
            return response.data;
          } else {
            return data;
          }
        })
      );
    } else {
      alert('수정에 실패했습니다');
    }
  };

  return (
    <S.TodoList id={id}>
      {!isEditMode && (
        <>
          <S.TodoContent isClear={isClear}>
            <S.ClearCheckBtn
              onClick={() => {
                isClear = !isClear;
                editRequest();
              }}
              isClear={isClear}
            />
            {todoContent}
          </S.TodoContent>
          <S.TodoControlBtns>
            <button type="button" onClick={() => setIsEditMode(prev => !prev)}>
              수정
            </button>
            <button type="button" onClick={deleteRequest}>
              삭제
            </button>
          </S.TodoControlBtns>
        </>
      )}

      {/* 수정모드 */}
      {isEditMode && (
        <>
          <S.TodoEdit
            value={editText}
            onChange={e => setEditText(e.target.value)}
          />
          <S.TodoControlBtns>
            <button
              type="button"
              onClick={() => {
                editRequest(editText);
                setIsEditMode(prev => !prev);
              }}
            >
              제출
            </button>
            <button type="button" onClick={() => setIsEditMode(prev => !prev)}>
              취소
            </button>
          </S.TodoControlBtns>
        </>
      )}
    </S.TodoList>
  );
};

export default TodoItem;
