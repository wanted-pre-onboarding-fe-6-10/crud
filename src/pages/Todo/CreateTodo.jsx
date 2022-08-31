import { ButtonWrapper, InputWrapper, TodoButton, TodoForm } from '../../styles/authstyle';
import Input from './../../components/Input';

function CreateTodo({ todo, onChange, onCreate }) {
  return (
    <>
      <TodoForm onSubmit={onCreate}>
        <InputWrapper style={{ width: '80%', margin: '0px 16px' }}>
          <Input type="text" value={todo} onChange={onChange} />
        </InputWrapper>
        <ButtonWrapper style={{ height: '100px', marginTop: '0' }}>
          <TodoButton>+</TodoButton>
        </ButtonWrapper>
      </TodoForm>
    </>
  );
}

export default CreateTodo;
