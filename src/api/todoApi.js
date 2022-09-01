import instance from './Axios';

const COMMON_URL = process.env.REACT_APP_API_URL + 'todos';

export const createTodo = async todo => {
  try {
    const response = await instance.post(COMMON_URL, {
      todo,
    });
    return response;
  } catch (e) {
    throw e;
  }
};
export const getTodos = async () => {
  try {
    const response = await instance.get(COMMON_URL);
    return response;
  } catch (e) {
    throw e;
  }
};
export const updateTodo = async (id, todo, isCompleted) => {
  try {
    const response = await instance.put(COMMON_URL + `/${id}`, {
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
    const response = await instance.delete(COMMON_URL + `/${id}`);
    return response;
  } catch (e) {
    throw e;
  }
};

// export class todoAPI {
//   TodoApi;
//   constructor() {
//     this.TodoApi = axios.create({
//       baseURL: BASE_URL,
//       headers: {
//         Authorization: `Bearer ${GetTokenInStorage()}`,
//       },
//     });
//   }

//   createTodo = async todo => {
//     const { data } = await this.TodoApi.post('/todos', todo);
//     return data;
//   };

//   getTodos = async () => {
//     const { data } = await this.TodoApi.get('/todos');
//     return data;
//   };

//   updateTodo = async (id, todo, isCompleted) => {
//     const { data } = await this.TodoApi.put(`/todos/${id}`, {
//       todo,
//       isCompleted,
//     });
//     return data;
//   };

//   deleteTodo = async id => {
//     const data = await this.TodoApi.delete(`/todos/${id}`);
//     return data.status;
//   };
// }
