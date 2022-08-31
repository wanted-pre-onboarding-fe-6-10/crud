/* eslint-disable*/ 
import styled from 'styled-components';
import variables from '../../../styles/variables';

export const TodoList = styled.li`
  width: 100%;
  height: 30px;
  margin: 10px 0;
  background-color: pink;
  border-radius: 20px;
  padding: 5px 10px;
  ${variables.flex({ justify: 'start' })};
`;

export const ClearCheckBtn = styled.button.attrs({ type: 'button' })`
  ${variables.flex()}
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
  ${variables.flex({ justify: 'start' })};
`;

export const TodoEdit = styled.input`
  width: 70%;
  height: 100%;
  background-color: white;
  ${variables.flex({ justify: 'start' })};
`;

export const TodoControlBtns = styled.div`
  width: 30%;
  height: 100%;
  ${variables.flex({ justify: 'space-around' })};

  button {
    width: 40%;
  }
`;
