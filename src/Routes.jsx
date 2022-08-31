import { Routes as ReactRoutes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Auth/Login';

function Routes() {
  const isToken = localStorage.getItem('accessToken');
  return (
    <ReactRoutes>
      <Route path="/" element={!isToken ? <Login /> : <Navigate replace to="/todo" />} />
    </ReactRoutes>
  );
}

export default Routes;
