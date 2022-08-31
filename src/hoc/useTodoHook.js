import { useState, useEffect } from 'react';
import { createTodo, deleteTodo, getTodos, updateTodo } from '../api/todoAPI';

export function useTodoHook() {
  const [inputTodo, setInputTodo] = useState('');
  const [updateText, setUpdateText] = useState('');
  const [todos, setTodos] = useState([]);
  const [updateToggle, setUpdateToggle] = useState(false);

  const onUpdateToggle = () => {
    setUpdateToggle(!updateToggle);
  };

  const onChange = e => {
    const { value } = e.target;
    setInputTodo(value);
  };

  const onChangeUpdate = e => {
    const { value } = e.target;
    setUpdateText(value);
  };

  const onCreateTodo = async inputTodo => {
    const response = await createTodo(inputTodo);
    if (response.status === 201) {
      setInputTodo('');
      window.location.replace('/todo');
    }
  };

  const onCheckTodo = async (todo, isComplete, id) => {
    // eslint-disable-next-line no-restricted-globals
    if (confirm('상태를 변경하시겠습니까?') === true) {
      const response = await updateTodo(todo, !isComplete, id);
      if (response.status === 200) {
        window.location.replace('/todo');
      }
    } else {
      return;
    }
  };

  const onUpdateTodo = async (todo, isComplete, id) => {
    // eslint-disable-next-line no-restricted-globals
    if (confirm('수정하시겠습니까?') === true) {
      const response = await updateTodo(todo, isComplete, id);
      if (response.status === 200) {
        setUpdateText('');
        window.location.replace('/todo');
      }
    } else {
      return;
    }
  };

  const onDeleteTodo = async id => {
    // eslint-disable-next-line no-restricted-globals
    if (confirm('삭제하시겠습니까?') === true) {
      const response = await deleteTodo(id);
      if (response.status === 204) {
        window.location.replace('/todo');
      }
    } else {
      return;
    }
  };

  useEffect(() => {
    const onGetTodo = async () => {
      const response = await getTodos();
      setTodos(response.data);
    };
    onGetTodo();
  }, []);

  return {
    inputTodo,
    onChange,
    onCreateTodo,
    todos,
    onDeleteTodo,
    onUpdateToggle,
    updateToggle,
    updateText,
    onChangeUpdate,
    onUpdateTodo,
    onCheckTodo,
  };
}
