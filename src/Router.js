import { BrowserRouter, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import GlobalStyle from './styles/GlobalStyle';
import variables from './styles/variables';

import LogIn from './pages/login/LogIn';
import Signup from './pages/signup/Signup';
import Todo from './pages/todo/Todo';

const Container = styled.div`
  height: 100vh;
  width: 100%;
  background-color: white;
  color: black;
  ${variables.flex({ direction: 'column' })}
`;

function Router() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LogIn />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/todo" element={<Todo />} />
          </Routes>
        </BrowserRouter>
      </Container>
    </>
  );
}

export default Router;
