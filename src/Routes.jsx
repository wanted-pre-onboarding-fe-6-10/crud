import { Routes as ReactRoutes, Route, Navigate } from 'react-router-dom';
import { MainPage, TodoPage } from './pages';

function Routes() {
  const isToken = localStorage.getItem('accessToken');
  return (
    <ReactRoutes>
      <Route path="/login" element={<MainPage />} />
      <Route path="/signup" element={<MainPage />} />
      <Route
        path="/todo"
        element={isToken ? <TodoPage /> : <Navigate replace to="/" />}
      />
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="*" element={<Navigate to="/" />} />
    </ReactRoutes>
  );
}

export default Routes;
