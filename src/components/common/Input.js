import styled from 'styled-components';

const Input = props => <InputBlock {...props} />;

export default Input;

const InputBlock = styled.input`
  font-size: 1rem;
  border: none;
  border-bottom: 1px solid #adb5bd;
  padding-bottom: 0.5rem;
  outline: none;
  width: 100%;

  &:focus {
    border-bottom: 1px solid #495057;
  }
`;
