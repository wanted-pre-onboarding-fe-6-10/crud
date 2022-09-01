// 글로벌 스타일 만들기 위한 createGlobalStyle 불러오기
import { createGlobalStyle } from 'styled-components';

// 스타일 초기화를 위한 reset 불러오기
import reset from 'styled-reset';

const ResetStyle = createGlobalStyle`

${reset}


`;

export default ResetStyle;
