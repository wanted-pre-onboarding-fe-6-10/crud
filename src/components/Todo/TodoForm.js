import styled from 'styled-components';

const ButtonColorHander = ButtonType => {
  switch (ButtonType) {
    case '수정':
      return '#FFB3B3';
    case '삭제':
      return '#QE2E2W';
    case '취소':
      return '#EAE3D2';
  }
};

export const Container = styled.div`
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 40px;
  box-sizing: border-box;
`;
export const Title = styled.div`
  font-size: 30px;
  padding: 3px;
  margin-bottom: 10px;
`;

export const Input = styled.input`
  font-size: 16px;
  line-height: 19px;
  width: 100%;
  height: 48px;
  box-sizing: border-box;
  padding: 15px 19px;
  border-radius: 5px;
`;

export const Button = styled.button`
  border-radius: 5px;
  width: 100%;
  border: none;
  cursor: pointer;
  background: #000000;
  color: #fff;
  height: 48px;
  font-weight: 600;
  font-size: 16px;
  line-height: 22px;
  display: flex;
  align-items: center;
  text-align: center;
  display: inline-block;
  margin: 16px 0;
  transition: all 0.5s;
  :hover {
    opacity: 0.7;
  }
`;

export const TodoContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 3px 0;
  box-sizing: border-box;
`;

export const TodoSpan = styled.div`
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  text-decoration: ${props => (props.isCheck ? 'line-through' : 'none')};
  color: ${props => (props.isCheck ? 'gray' : 'black')};
`;

export const TodoButton = styled.button`
  width: 80px;
  height: 30px;
  font-size: 16px;
  border-radius: 5px;
  border: 1px solid white;
  background-color: ${props => ButtonColorHander(props.ButtonType)};
`;

export const TodoInput = styled.input`
  font-size: 16px;
  line-height: 19px;
  height: 36px;
  box-sizing: border-box;
  padding: 0 0;
  border-radius: 5px;
`;
