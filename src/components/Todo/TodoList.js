import Todo from './Todo';

export default function TodoList({ todos, Getdata }) {
  const List = todos.map(res => {
    return <Todo key={res.id} todo={res} Getdata={Getdata} />;
  });
  return List;
}
