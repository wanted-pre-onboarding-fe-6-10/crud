import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { getTodos } from '../api/todoAPI';
import { Divider, Title } from '../commons';
import { NewItemInput } from '../components/Todo/NewItemInput';
import { TodoListItem } from '../components/Todo/TodoListItem';
import { checkTokenExists } from '../utils/utils';

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TodoPage = () => {
  let navigate = useNavigate();
  const [list, setList] = useState([]);

  const getList = async () => {
    const response = await getTodos();
    console.log(response.data);
    if (response) {
      setList(response.data);
    }
  };

  useEffect(() => getList, []);

  // Assignment3
  useEffect(() => {
    if (!checkTokenExists()) navigate('/', { replace: true });
  }, []);

  return (
    <>
      <Container>
        <Title>TODO 리스트</Title>
        <NewItemInput refreshList={getList} />
        <Divider />
        {list
          ? list.map((item, index) => (
              <TodoListItem key={item.id} item={item} refreshList={getList} />
            ))
          : null}
      </Container>
    </>
  );
};
