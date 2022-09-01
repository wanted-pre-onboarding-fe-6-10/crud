import styled from 'styled-components';

export const Container = styled.div`
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

export const TodoWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 50px;
  width: 600px;
  height: 600px;
  background-color: #fff;
  border: 1px solid #cfcfcf;
`;

export const TodoItems = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 90%;
`;

export const InputWrapper = styled.form`
  display: flex;
  justify-content: center;
  width: 90%;
  padding: 20px;
  background-color: #ffffff;
`;

export const TodoInput = styled.input.attrs(props => ({
  type: props.inputType,
  palceholder: props.palceholder,
}))`
  text-align: center;
  width: 95%;
  height: 30px;
  font-size: 1em;
  padding: 10px;
  border: none;
  border-bottom: 1.5px solid #929292;
  &:focus {
    outline: none;
  }
`;

export const TodoAddButton = styled.button`
  width: 30px;
  font-size: 1em;
  font-weight: bold;
  border-radius: 50%;
  border: none;
  background-color: #babdbe;
  color: #ffffff;
  margin: 0 10px;
  &:hover {
    background-color: #396ee2;
  }
`;

export const TodoItem = styled.li`
  position: relative;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 40px;
  margin-bottom: 2px;
  padding: 10px 0;
  border-top: 1px solid #cfcfcf;
  border-bottom: 1px solid #cfcfcf;
`;

export const Item = styled.div`
  width: 80%;
  margin: 0 20px;
`;

export const ItemButton = styled.div`
  width: 20%;
  margin: 0 10px;
  display: flex;
  justify-content: space-between;
`;

export const EditButton = styled.button`
  cursor: pointer;
  font-size: 0.8em;
  &:hover {
    font-weight: bolder;
  }
`;

export const EditInput = styled.input.attrs(props => ({
  type: props.inputType,
  palceholder: props.palceholder,
}))`
  text-align: center;
  width: 70%;
  height: 30px;
  font-size: 1em;
  border: none;
`;

export const LogOutButton = styled.button`
  $:hover {
    font-weight: bold;
  }
`;
