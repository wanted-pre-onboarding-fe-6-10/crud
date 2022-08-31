import styled from 'styled-components';

export const AuthContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 50px;
  width: 600px;
  height: 600px;
  background-color: #ffebee;
`;

export const AuthInput = styled.input.attrs(props => ({
  type: props.inputType,
  palceholder: props.palceholder,
  disabled: props.disabled,
}))`
  text-align: center;
  width: 70%;
  height: 50px;
  font-size: 1em;
  border: 1px solid black;
  border-radius: 5px;
  margin: 30px;
`;

export const AuthButton = styled.button`
  font-size: 1em;
  font-weight: bold;
  color: black;
  width: 70%;
  margin: 30px;
  border: 2px solid #bdbdbd;
  height: 45px;
  background-color: #ffffff;
  border-radius: 5px;
  &:hover {
    background-color: #bdbdbd;
    font-weight: bolder;
    color: #fff;
  }
  &:disabled {
    color: #fff;
    border: 2px solid #bdbdbd;
    background-color: #bdbdbd;
  }
`;

export const AuthTitle = styled.h1`
  margin: 30px;
`;

export const RegisterButton = styled.button`
  color: black;
  &:hover {
    font-weight: bold;
  }
`;
