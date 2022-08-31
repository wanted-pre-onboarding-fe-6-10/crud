import { todoAPI } from '../../services/todoApi';
import { useState } from 'react';
import { useRef } from 'react';
import { TodoInput, TodoButton, TodoContainer, TodoSpan } from './TodoForm';

const todoApi = new todoAPI();

const deleteHandler = async (id, Getdata) => {
  await todoApi.deleteTodo(id);
  Getdata();
}; // Delete Api 호출 후 변경된 Data 다시 반영

const checkboxHandler = async (id, todo, isCompleted, setIsCheck) => {
  if (setIsCheck) {
    setIsCheck(prev => !prev);
  }
  await todoApi.updateTodo(id, todo, isCompleted);
}; // Update Api에 isCompleted값만 반영

const updateIuputHandler = async (
  id,
  todo,
  isCompleted,
  SetUpdateClick,
  Getdata
) => {
  if (SetUpdateClick) {
    SetUpdateClick(prev => !prev);
  }
  await todoApi.updateTodo(id, todo, isCompleted);
  Getdata();
}; // Update Api에 변경된 todo값 isCompleted=false 반영

export default function Todo(props) {
  const [isCheck, setIsCheck] = useState(props.todo.isCompleted);
  const [updateClick, SetUpdateClick] = useState(true); // 수정버튼 클릭시 변경
  const updateInput = useRef(null); // 수정버튼 클릭시 나오는 Input Ref
  return (
    <TodoContainer key={`${props.todo.id}-${props.todo.userId}`}>
      <input
        type="checkbox"
        onClick={e => {
          checkboxHandler(props.todo.id, props.todo.todo, !isCheck, setIsCheck);
        }}
        defaultChecked={isCheck}
      />
      {updateClick ? ( // 수정버튼 클릭시 표현값
        <>
          <TodoSpan isCheck={isCheck}>{props.todo.todo}</TodoSpan>
          <div>
            <TodoButton
              ButtonType="수정"
              onClick={e => {
                SetUpdateClick(prev => !prev);
              }}
            >
              수정
            </TodoButton>
            <TodoButton
              ButtonType="삭제"
              onClick={e => deleteHandler(props.todo.id, props.Getdata)}
            >
              삭제
            </TodoButton>
          </div>
        </>
      ) : (
        <>
          <TodoInput defaultValue={props.todo.todo} ref={updateInput} />
          <div>
            <TodoButton
              ButtonType="수정"
              onClick={e => {
                if (updateInput.current?.value === undefined) {
                  SetUpdateClick(prev => !prev);
                } else {
                  updateIuputHandler(
                    props.todo.id,
                    updateInput.current.value,
                    false,
                    SetUpdateClick,
                    props.Getdata
                  );
                }
              }}
            >
              수정완료
            </TodoButton>
            <TodoButton
              ButtonType="취소"
              onClick={e => SetUpdateClick(prev => !prev)}
            >
              취소
            </TodoButton>
          </div>
        </>
      )}
    </TodoContainer>
  );
}
