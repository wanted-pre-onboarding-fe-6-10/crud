import './App.css';
import AuthForm from './component/Auth/AuthForm';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import GlobalStyle from './styles/GlobalStyle';
import TodoForm from './component/Todo/TodoForm';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<AuthForm />} />
        <Route path="/todo" element={<TodoForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
