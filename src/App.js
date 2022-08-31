import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Sign, Todo } from './pages';

function App() {
  const token = localStorage.getItem('access_token');

  if (!token) {
    return <Sign />;
  }

  return (
    <div className="wrapper">
      <BrowserRouter basename="/wanted-pre-onboarding-fe">
        <Routes>
          <Route path="/sign" element={<Sign />} />
          <Route path="/todo" element={<Todo />} />
          <Route path="*" element={<Todo />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
