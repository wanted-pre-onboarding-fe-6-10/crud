import { instance } from './customAxios';

const COMMON = process.env.REACT_APP_BASE_URL + 'todos';

export const createTodo = async todo => {
  try {
    const response = await instance.post(COMMON, {
      todo,
    });
    return response;
  } catch (e) {
    throw e;
  }
};
export const getTodos = async () => {
  try {
    const response = await instance.get(COMMON);
    return response;
  } catch (e) {
    throw e;
  }
};
export const updateTodo = async (todo, isCompleted, id) => {
  try {
    const response = await instance.put(COMMON + `/${id}`, {
      todo,
      isCompleted,
    });
    return response;
  } catch (e) {
    throw e;
  }
};

export const deleteTodo = async id => {
  try {
    const response = await instance.delete(COMMON + `/${id}`);
    return response;
  } catch (e) {
    throw e;
  }
};
