import instance from './axios';

const baseURL = process.env.REACT_APP_BASE_URL;

export const createTodo = async todo => {
  const response = await instance.post(baseURL + '/todos', { todo });

  return response;
};

export const getTodos = async () => {
  const response = await instance.get(baseURL + '/todos');

  return response;
};

export const updateTodo = async (id, todo, isCompleted) => {
  const response = await instance.put(`${baseURL}/todos/${id}`, {
    id,
    todo,
    isCompleted,
  });

  return response;
};

export const deleteTodo = async id => {
  const response = await instance.delete(`${baseURL}/todos/${id}`);

  return response;
};
