import { Routes as ReactRoutes, Route, Navigate } from 'react-router-dom';
import { MainPage, TodoPage } from './pages';

function Routes() {
  return (
    <ReactRoutes>
      <Route path="/login" element={<MainPage />} />
      <Route path="/signup" element={<MainPage />} />
      <Route path="/todo" element={<TodoPage />} />
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="*" element={<Navigate to="/" />} />
    </ReactRoutes>
  );
}

export default Routes;
