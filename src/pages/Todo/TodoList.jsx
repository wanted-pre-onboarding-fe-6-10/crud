import { Wrapper } from '../../styles/authstyle';
import TodoListItem from './TodoListItem';

function TodoList({ todos, onRemove, onTodoChange }) {
  return (
    <Wrapper>
      {todos ? (
        todos.map((todo, idx) => (
          <TodoListItem
            key={idx}
            task={todo}
            onRemove={onRemove}
            onTodoChange={onTodoChange}
          />
        ))
      ) : (
        <div>할 일을 등록해주세요</div>
      )}
    </Wrapper>
  );
}

export default TodoList;
