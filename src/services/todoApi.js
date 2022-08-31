import axios, { AxiosInstance } from 'axios';
import { GetTokenInStorage } from '../utils/Localstorage';

const BASE_URL = process.env.REACT_APP_API_URL;

export class todoAPI {
  TodoApi;
  constructor() {
    this.TodoApi = axios.create({
      baseURL: BASE_URL,
      headers: {
        Authorization: `Bearer ${GetTokenInStorage()}`,
      },
    });
  }

  createTodo = async todo => {
    const { data } = await this.TodoApi.post('/todos', todo);
    return data;
  };

  getTodos = async () => {
    const { data } = await this.TodoApi.get('/todos');
    return data;
  };

  updateTodo = async (id, todo, isCompleted) => {
    const { data } = await this.TodoApi.put(`/todos/${id}`, {
      todo,
      isCompleted,
    });
    return data;
  };

  deleteTodo = async id => {
    const data = await this.TodoApi.delete(`/todos/${id}`);
    return data.status;
  };
}

// export const createTodo = async (todo: todo): Promise<TypeTodo> => {
//   const { data } = await TodoApi.post('/todos', todo);
//   return data;
// };
// export const getTodos = async (): Promise<TypeTodo[]> => {
//   const { data } = await TodoApi.get('/todos');
//   return data;
// };

// export const updateTodo = async (
//   id: updatetodo['id'],
//   todo: updatetodo['todo'],
//   isCompleted: updatetodo['isCompleted']
// ): Promise<TypeTodo> => {
//   const { data } = await TodoApi.put(`/todos/${id}`, { todo, isCompleted });
//   return data;
// };

// export const deleteTodo = async (id: deletetodo['id']): Promise<Status> => {
//   const data = await TodoApi.delete(`/todos/${id}`);
//   return data.status;
// };
