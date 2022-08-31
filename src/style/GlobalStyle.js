import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
${reset}

* {
    box-sizing: border-box;
}

button {
    border: none;
    background-color: transparent; 
    cursor: pointer;
}

body {
    display: flex;
    justify-content: space-around;
    align-items: center;
}
`;

export default GlobalStyle;
