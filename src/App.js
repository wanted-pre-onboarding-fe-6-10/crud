import './App.css';
import AuthForm from './component/AuthForm';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import GlobalStyle from './style/GlobalStyle';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<AuthForm />} />
        <Route path="/todo" element={<AuthForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
