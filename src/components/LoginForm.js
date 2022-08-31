import React from 'react';
import styled from 'styled-components';

export const Container = styled.div`
  background-color: #fff;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 20px;
  box-sizing: border-box;
  width: 645px;
  height: 698px;
`;

export const MainTitle = styled.div`
  text-align: center;
`;

export const Title = styled.div`
  font-weight: 600;
  font-size: 22px;
  line-height: 39px;
  align-items: center;
  text-align: center;
`;

export const Input = styled.input`
  font-size: 16px;
  line-height: 19px;
  width: 100%;
  height: 48px;
  border: ${props => (props.error ? '1px solid red' : '1px solid #ececec')};
  box-sizing: border-box;
  padding: 15px 19px;
  border-radius: 5px;
  ::placeholder {
    color: #c8c8c8;
  }
`;

export const InputTitle = styled.p`
  font-size: 16px;
  font-weight: 600;
  line-height: 20px;
  color: ${props => (props.error ? 'red' : '#000000')};
  margin: 0;
  display: flex;
`;

export const InputDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 12px;
  margin-bottom: 7px;
`;

export const Button = styled.button`
  border-radius: 5px;
  width: 100%;
  border: none;
  cursor: pointer;
  background: #000000;
  color: #fff;
  height: 48px;
  font-weight: 600;
  font-size: 16px;
  line-height: 22px;
  display: flex;
  align-items: center;
  text-align: center;
  display: inline-block;
  margin: 16px 0;
  transition: all 0.5s;
  :disabled {
    opacity: 0.7;
    cursor: default;
  }
  :hover {
    opacity: 0.7;
  }
`;

export const Graytext = styled.p`
  font-weight: 400;
  font-size: 14px;
  margin: 0;
  color: #999999;
`;

export const Text = styled.p`
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
  color: #000000;
  margin: 0;
`;

export const ErrorSpan = styled.span`
  display: inline-block;
  margin-left: auto;
  font-weight: 700;

  font-size: 14px;
  color: red;
`;
export const LoginErrorSpan = styled.span`
  display: inline-block;
  margin-right: auto;
  font-weight: 700;
  font-size: 14px;
  color: red;

  text-decoration: none !important;
`;

export const Atag = styled.a`
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  align-items: center;
  text-decoration-line: underline;
  color: #111111;
  margin-top: 12px;
  margin-left: 3px;
  cursor: pointer;
  :hover {
    color: #2e5cff;
    text-decoration-line: none;
  }
`;
