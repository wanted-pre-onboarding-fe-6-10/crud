import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import TodoPage from './pages/TodoPage';

let isLogin = localStorage.getItem('token');

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={isLogin ? <Navigate replace to="/todo" /> : <LoginPage />}
      />
      <Route path="/register" element={<RegisterPage />} />
      <Route
        path="/todo"
        element={isLogin ? <TodoPage /> : <Navigate replace to="/" />}
      />
    </Routes>
  );
}

export default App;
