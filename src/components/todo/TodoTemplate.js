import React from 'react';
import styled from 'styled-components';

function TodoTemplate({ children }) {
  return <TodoTemplateBlock>{children}</TodoTemplateBlock>;
}

export default TodoTemplate;

const TodoTemplateBlock = styled.div`
  width: 512px;
  padding: 2rem;
  background-color: white;
  margin-left: auto;
  margin-right: auto;
  margin-top: 6rem;
  border-radius: 4px;
  overflow: hidden;
`;
