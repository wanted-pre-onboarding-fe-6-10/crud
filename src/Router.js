import { BrowserRouter, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import GlobalStyle from './styles/GlobalStyle';
import { flex } from './styles/variables';

import SignIn from './pages/signIn/Signin';
import Signup from './pages/signup/Signup';
import Todo from './pages/todo/Todo';
import Auth from './components/Auth';

function Router() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<SignIn />} />
            <Route path="/signup" element={<Signup />} />
            <Route
              path="/todo"
              element={
                <Auth>
                  <Todo />
                </Auth>
              }
            />
          </Routes>
        </BrowserRouter>
      </Container>
    </>
  );
}

const Container = styled.div`
  height: 100vh;
  width: 100%;
  background-color: #dbcaca;
  color: black;
  ${flex({ direction: 'column' })}
`;

export default Router;
