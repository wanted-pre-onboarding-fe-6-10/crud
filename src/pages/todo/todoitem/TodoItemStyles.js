import styled from 'styled-components';
import { flex } from '../../../styles/variables';

export const TodoList = styled.li`
  width: 100%;
  height: 30px;
  margin: 10px 0;
  background-color: #d7bc6a;
  border-radius: 20px;
  padding: 5px 10px;
  ${flex({ justify: 'start' })};
`;

export const ClearCheckBtn = styled.button.attrs({ type: 'button' })`
  ${flex()}
  width: 20px;
  height: 20px;
  border: 2px solid gray;
  background-color: ${props => (props.isClear ? 'green' : 'lightgray')};
  border-radius: 50%;
  margin-right: 10px;
`;

export const TodoContent = styled.div`
  width: 70%;
  height: 100%;
  text-decoration: ${props => props.isClear && 'line-through'};
  ${flex({ justify: 'start' })};
`;

export const TodoEdit = styled.input`
  width: 70%;
  height: 100%;
  background-color: burlywood;
  ${flex({ justify: 'start' })};
`;

export const TodoControlBtns = styled.div`
  width: 30%;
  height: 100%;
  ${flex({ justify: 'space-around' })}

  button {
    width: 40%;
  }
`;
