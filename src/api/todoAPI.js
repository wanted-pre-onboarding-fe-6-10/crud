import { instance } from './customAxios';

const COMMON = process.env.REACT_APP_BASE_URL;
const access_token = localStorage.getItem('token');

const headers = {
  Authorization: `Bearer ${access_token}`,
};

export const createTodo = async todo => {
  try {
    const response = await instance.post(
      COMMON + 'todos',
      {
        todo,
      },
      { headers }
    );
    return response;
  } catch (e) {
    throw e;
  }
};
export const getTodos = async () => {
  try {
    const response = await instance.get(COMMON + 'todos', {
      headers,
    });
    return response;
  } catch (e) {
    throw e;
  }
};
export const updateTodo = async (todo, isCompleted, id) => {
  try {
    const response = await instance.put(
      COMMON + `todos/${id}`,
      {
        todo,
        isCompleted,
      },
      { headers }
    );
    return response;
  } catch (e) {
    throw e;
  }
};

export const deleteTodo = async id => {
  try {
    const response = await instance.delete(COMMON + `todos/${id}`, {
      headers,
    });
    return response;
  } catch (e) {
    throw e;
  }
};
