import './App.css';
import AuthForm from './component/AuthForm';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import GlobalStyle from './style/GlobalStyle';

function App() {
  return (
    <>
      <GlobalStyle />
      <AuthForm />
    </>
  );
}

export default App;
