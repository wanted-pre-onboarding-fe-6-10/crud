/* eslint-disable*/ 
import styled from 'styled-components';
import variables from '../../styles/variables';

export const H1 = styled.h1`
font-size:50px;
padding-top:20px;
`;

export const TodoWrapper = styled.div`
  width: 60%;
  height: 90vh;
  margin-top: 20px;
  border:solid 1px #dddddd;
  ${variables.flex({ direction: 'column', justify: 'start' })}
`;

export const TodoTop = styled.div`
  width: 100%;
  ${variables.flex()}
  margin-top: 30px;

  input {
    width: 50%;
    padding: 5px;
    border-radius:16px;
  }

  button {
    margin-left: 20px;
    padding: 5px 10px;
  }
`;

export const TodoBody = styled.ul`
  width: 70%;
  height: 80%;
  margin-top: 40px;
`;

export const TodoList = styled.li`
  width: 100%;
  height: 30px;
  margin: 5px 0;
  ${variables.flex({ justify: 'start' })};
`;

export const TodoContent = styled.div`
  width: 70%;
  height: 100%;
  background-color: white;
  ${variables.flex({ justify: 'start' })};

  button {
    ${variables.flex()}
    width: 20px;
    height: 20px;
    border: 2px solid gray;
    background-color: white;
    border-radius: 50%;
    margin-right: 10px;
  }
`;
