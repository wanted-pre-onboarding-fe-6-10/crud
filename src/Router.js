import { Routes as ReactRoutes, Route, Navigate } from 'react-router-dom';
import Login from './pages/LoginPage';
import Signin from './pages/SigninPage';
import Todo from './pages/TodoPage';

function Routes() {
  const isToken = localStorage.getItem('Token');
  return (
    <ReactRoutes>
      <Route path="/" element={<Login />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/todo" element={isToken ? <Todo /> : <Navigate replace to="/" />} />
    </ReactRoutes>
  );
}

export default Routes;
