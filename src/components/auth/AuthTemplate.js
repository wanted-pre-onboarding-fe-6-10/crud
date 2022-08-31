import React from 'react';
import styled from 'styled-components';

function AuthTemplate({ children }) {
  return (
    <AuthTemplateBlock>
      <WhiteBox>{children}</WhiteBox>
    </AuthTemplateBlock>
  );
}

export default AuthTemplate;

const AuthTemplateBlock = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const WhiteBox = styled.div`
  width: 360px;
  padding: 2rem;
  background-color: white;
  border-radius: 2px;
`;
