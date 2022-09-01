import instance from './axios';

const COMMON = process.env.REACT_APP_BASE_URL + '/todos';

export const createTodo = async todo => {
  const response = await instance.post(COMMON, { todo });

  return response;
};

export const getTodos = async () => {
  const response = await instance.get(COMMON);

  return response;
};

export const updateTodo = async (id, todo, isCompleted) => {
  const response = await instance.put(COMMON + `/${id}`, { todo, isCompleted });

  return response;
};

export const deleteTodo = async id => {
  const response = await instance.delete(COMMON + `/${id}`);

  return response;
};
