import axios from 'axios';
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

const Todoapi = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: `Bearer ${GetTokenInStorage()}`,
  },
});

export const createTodo = async todo => {
  const { data } = await Todoapi.post('/todos', todo);
  return data;
};
export const getTodos = async () => {
  const { data } = await Todoapi.get('/todos');
  return data;
};

export const updateTodo = async (id, todo, isCompleted) => {
  const { data } = await Todoapi.put(`/todos/${id}`, { todo, isCompleted });
  return data;
};

export const deleteTodo = async id => {
  const data = await Todoapi.delete(`/todos/${id}`);
  return data.status;
};
