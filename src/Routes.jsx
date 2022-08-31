import { Routes as ReactRoutes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Auth/Login';
import Todo from './pages/Todo/Todo';

function Routes() {
  const isToken = localStorage.getItem('accessToken');
  return (
    <ReactRoutes>
      <Route path="/" element={!isToken ? <Login /> : <Navigate replace to="/todo" />} />
      <Route path="/todo" element={isToken ? <Todo /> : <Navigate replace to="/" />} />
    </ReactRoutes>
  );
}

export default Routes;
