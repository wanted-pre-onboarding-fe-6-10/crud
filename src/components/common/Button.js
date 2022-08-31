import styled, { css } from 'styled-components';

const Button = props => <StyledButton {...props} />;

export default Button;

const StyledButton = styled.button`
  border: none;
  padding: 0.25rem 1rem;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: bold;
  color: white;
  outline: none;
  cursor: pointer;
  background-color: #22b8cf;

  ${props =>
    props.fullWidth &&
    css`
      width: 100%;
    `}

  ${props =>
    props.inItemStyle &&
    css`
      background-color: gray;
      padding: 0.25rem;
      font-size: 14px;
    `}
`;
