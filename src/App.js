import React from 'react';
import reset from 'styled-reset';
import { createGlobalStyle } from 'styled-components';
import Routes from './Routes';

function App() {
  return (
    <>
      <GlobalStyle />
      <Routes />
    </>
  );
}

export default App;

const GlobalStyle = createGlobalStyle`
  ${reset}
`;
