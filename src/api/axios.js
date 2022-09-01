import axios from 'axios';

const token = localStorage.getItem('accessToken');

export const todoAxios = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

export const tokenAxios = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  headers: {
    'Content-type': 'application/json',
  },
});

export const signIn = async data => {
  return await tokenAxios.post('/auth/signin', data);
};

export const signUp = async data => {
  return await tokenAxios.post('/auth/signup', data);
};

export const createTodo = async data => {
  return await todoAxios.post('/todos', data);
};

export const getTodo = async () => {
  return await todoAxios.get('/todos');
};

export const updateTodo = async data => {
  const { todo, isCompleted, id } = data;
  return await todoAxios.put(`/todos/${id}`, { todo, isCompleted });
};

export const deleteTodo = async id => {
  return await todoAxios.delete(`/todos/${id}`);
};
