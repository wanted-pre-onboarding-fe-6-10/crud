import Todo from './Todo';

export default function TodoList(props) {
  const List = props.todos.map(res => {
    return <Todo key={res.id} todo={res} Getdata={props.Getdata} />;
  });
  return <>{List}</>;
}
