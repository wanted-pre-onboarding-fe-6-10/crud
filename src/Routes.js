import { Routes as ReactRoutes, Route, Navigate } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import TodoPage from './pages/TodoPage';

function Routes() {
  const isLogin = localStorage.getItem('token');
  return (
    <ReactRoutes>
      <Route path="/" element={isLogin ? <Navigate replace to="/todo" /> : <LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/todo" element={isLogin ? <TodoPage /> : <Navigate replace to="/" />} />
    </ReactRoutes>
  );
}

export default Routes;
