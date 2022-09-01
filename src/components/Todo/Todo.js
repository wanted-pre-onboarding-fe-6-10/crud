import { deleteTodo, updateTodo } from '../../api/userApi';
import { useState } from 'react';
import { useRef } from 'react';
import { TodoInput, TodoButton, TodoContainer, TodoSpan } from './TodoForm';

// Delete Api 호출 후 변경된 Data 다시 반영
const deleteHandler = async (id, Getdata) => {
  await deleteTodo(id);
  Getdata();
};

// Update Api에 isCompleted값만 반영
const checkboxHandler = async (id, todo, isCompleted, setIsCheck) => {
  if (setIsCheck) {
    setIsCheck(prev => !prev);
  }
  await updateTodo(id, todo, isCompleted);
};

// Update Api에 변경된 todo값 isCompleted=false 반영
const updateIuputHandler = async (id, todo, isCompleted, SetUpdateClick, Getdata) => {
  if (SetUpdateClick) {
    SetUpdateClick(prev => !prev);
  }
  await updateTodo(id, todo, isCompleted);
  Getdata();
};

export default function Todo({ todo, Getdata }) {
  // props에 무엇이 들어올지 본인밖에 모름. 3자가 코드리뷰할때 시간이 더 많이 들어감
  const [isCheck, setIsCheck] = useState(todo.isCompleted);
  const [updateClick, SetUpdateClick] = useState(true); // 수정버튼 클릭시 변경
  const updateInput = useRef(null); // 수정버튼 클릭시 나오는 Input Ref
  return (
    <TodoContainer key={`${todo.id}-${todo.userId}`}>
      <input
        type="checkbox"
        onClick={e => {
          checkboxHandler(todo.id, todo.todo, !isCheck, setIsCheck);
        }}
        defaultChecked={isCheck}
      />
      {updateClick ? ( // 수정버튼 클릭시 표현값
        <>
          <TodoSpan isCheck={isCheck}>{todo.todo}</TodoSpan>
          <div>
            <TodoButton
              ButtonType="수정"
              onClick={e => {
                SetUpdateClick(prev => !prev);
              }}
            >
              수정
            </TodoButton>
            <TodoButton ButtonType="삭제" onClick={e => deleteHandler(todo.id, Getdata)}>
              삭제
            </TodoButton>
          </div>
        </>
      ) : (
        <>
          <TodoInput defaultValue={todo.todo} ref={updateInput} />
          <div>
            <TodoButton
              ButtonType="수정"
              onClick={e => {
                if (updateInput.current?.value === undefined) {
                  SetUpdateClick(prev => !prev);
                } else {
                  updateIuputHandler(
                    todo.id,
                    updateInput.current.value,
                    false,
                    SetUpdateClick,
                    Getdata
                  );
                }
              }}
            >
              수정완료
            </TodoButton>
            <TodoButton ButtonType="취소" onClick={e => SetUpdateClick(prev => !prev)}>
              취소
            </TodoButton>
          </div>
        </>
      )}
    </TodoContainer>
  );
}
