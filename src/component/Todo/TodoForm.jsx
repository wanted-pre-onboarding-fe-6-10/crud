import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getTodos, updateTodo, createTodo, deleteTodo } from '../../api/TodoAPI';
import * as S from '../../styles/componentStyle';

const TodoForm = () => {
  const navigate = useNavigate();
  const [todoItems, setTodoItems] = useState([]);
  const [updateInput, setUpdateInput] = useState('');
  const [onEdit, setEditMode] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem('access')) {
      navigate('/');
    }
  }, []);

  useEffect(() => {
    getItem();
  }, []);

  const getItem = async () => {
    const response = await getTodos();
    setTodoItems(response.data);
  };

  const addItem = async value => {
    const response = await createTodo(value);

    if (response.status === 201) {
      setTodoItems(prev => {
        return [...prev, response.data];
      });
    }
  };

  const removeItem = async itemId => {
    await deleteTodo(itemId);
    setTodoItems(
      todoItems.filter(item => {
        return item.id !== itemId;
      })
    );
  };

  const updateItem = async (id, todo, isCompleted) => {
    const response = await updateTodo(id, todo, isCompleted);
    setTodoItems(todoItems.map(item => (item.id === response.data.id ? response.data : item)));
    setEditMode(false);
    setUpdateInput(updateInput);
  };

  const handleUpdateInput = e => {
    setUpdateInput(e.target.value);
  };

  function handleLogOut() {
    localStorage.removeItem('access');
    navigate('/');
  }

  return (
    <S.TodoWrapper>
      <S.InputWrapper>
        <S.TodoInput
          inputType="text"
          placeholder="할일을 입력해주세요"
          onChange={e => setInputValue(e.target.value)}
          value={inputValue}
        />
        <S.TodoAddButton
          onClick={e => {
            inputValue && addItem(inputValue);
            e.preventDefault();
            setInputValue('');
          }}
        >
          +
        </S.TodoAddButton>
      </S.InputWrapper>
      <S.TodoItems>
        {todoItems.map(item => (
          <S.TodoItem key={item.id}>
            {onEdit ? (
              <S.EditInput inputType="text" onChange={handleUpdateInput} value={updateInput} />
            ) : (
              <>
                <input
                  type="checkbox"
                  onChange={e => {
                    updateItem(item.id, item.todo, e.target.checked);
                    setIsChecked(e.target.checked);
                  }}
                  checked={item.isCompleted}
                />
                <S.Item>{item.todo}</S.Item>
              </>
            )}
            <S.ItemButton>
              <S.EditButton
                onClick={
                  onEdit
                    ? () => updateItem(item.id, updateInput, isChecked)
                    : () => setEditMode(true)
                }
              >
                {onEdit ? '제출' : '수정'}
              </S.EditButton>
              <S.EditButton onClick={onEdit ? () => setEditMode(false) : () => removeItem(item.id)}>
                {onEdit ? '취소' : '삭제'}
              </S.EditButton>
            </S.ItemButton>
          </S.TodoItem>
        ))}
      </S.TodoItems>
      <S.LogOutButton onClick={handleLogOut}>로그아웃</S.LogOutButton>
    </S.TodoWrapper>
  );
};

export default TodoForm;
