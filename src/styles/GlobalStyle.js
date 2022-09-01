// 글로벌 스타일 만들기 위한 createGlobalStyle 불러오기
import { createGlobalStyle } from 'styled-components';

// 스타일 초기화를 위한 reset 불러오기
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`

${reset}

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, menu, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
main, menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}

/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, main, menu, nav, section {
  display: block;
}
/* HTML5 hidden-attribute fix for newer browsers */
*[hidden] {
    display: none;
}
body {
  line-height: 1;
}
menu, ol, ul {
  list-style: none;
}
blockquote, q {
  quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
  content: '';
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
* {
  box-sizing: border-box;
}
body {
  font-family: 'Noto Sans KR', sans-serif;
  width:100vw;
  height:100vh;
  /* padding:0; */
  margin:0;
  background-color: #4d7fff;
  color: #FFFFFF;
  line-height: 1.2;
}
a {
  text-decoration:none;
  color:inherit;
}
/* 부드러운 스크롤 */
html {
    scroll-behavior: smooth;
}
:root {
  --vh: 100%;
}
`;

export default GlobalStyle;
