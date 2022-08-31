import styled from 'styled-components';
import { flex } from '../../styles/variables';

export const TodoWrapper = styled.div`
  width: 60%;
  height: 90vh;
  margin-top: 20px;
  background-color: gray;
  ${flex({ direction: 'column', justify: 'start' })}
`;

export const TodoTop = styled.div`
  width: 100%;
  ${flex()}
  margin-top: 30px;

  input {
    width: 50%;
    padding: 5px;
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
  ${flex({ justify: 'start' })};
`;

export const TodoContent = styled.div`
  width: 70%;
  height: 100%;
  background-color: burlywood;
  ${flex({ justify: 'start' })};

  button {
    ${flex()}
    width: 20px;
    height: 20px;
    border: 2px solid gray;
    background-color: ${props => props.clearBtn};
    border-radius: 50%;
    margin-right: 10px;
  }
`;
