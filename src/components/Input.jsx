import React, { ChangeEvent, useState } from 'react';
import styled from 'styled-components';

const StyledInput = styled.input`
  width: 100%;
  height: 36px;
  margin-bottom: 0px;
  border: 2px solid #c9c9c9;
  border-radius: 5px;
  padding-left: 8px;
  font-size: 14px;
`;

const Input = ({ type, value, onChange }) => {
  const [inputValue, setInputValue] = useState(value);

  const changeEvent = ev => {
    setInputValue(ev.target.value);
    onChange && onChange(ev);
  };

  return <StyledInput type={type} value={value} onChange={changeEvent} />;
};

export default Input;
