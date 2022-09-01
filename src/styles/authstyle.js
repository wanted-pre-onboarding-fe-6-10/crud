import { Checkbox } from '@mui/material';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center; /* 수직 정렬 */
  justify-content: center; /* 수평 정렬 */
`;

export const Wrapper = styled.div``;

export const LoginBox = styled.div`
  width: 400px;
  height: 500px;
  border-radius: 10px;
  background-color: #ffffff;
  padding: 64px 32px;
  color: #424242;
  position: relative;
`;
export const TitleWrapper = styled.div`
  text-align: center;
  margin-bottom: 16px;
`;
export const Title = styled.div`
  font-size: 24px;
  font-weight: bold;
`;
export const FormWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 8px;
`;
export const Form = styled.form`
  width: 100%;
`;
export const InputWrapper = styled.div``;
export const InputTitle = styled.div`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 8px;
  margin-top: ${props => (props.isWanted ? '32px' : props.isValid ? '72px' : '16px')};
`;

export const SingupWrapper = styled.div`
  text-align: center;
  height: 40px;
  margin-top: 16px;
`;
export const SingupSentence = styled.span``;
export const Linkto = styled(Link)`
  color: #4d7fff;
`;
export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 16px;
  height: 150px;
`;
export const Button = styled.button`
  height: 50px;
  width: 250px;
  border: 0;
  border-radius: 20px;
  background-color: #4d7fff;
  color: #ffffff;
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 16px;
  margin-top: 8px;
  cursor: pointer;
`;
export const ImgWrapper = styled.div`
  position: absolute;
  left: 33%;
  bottom: 0;
  display: flex;
  justify-content: center;
`;
export const Img = styled.img.attrs({
  src: `${process.env.PUBLIC_URL}/wanted.png`,
})`
  width: 130px;
  height: auto;
`;
export const SingupBox = styled.div`
  background-color: #ffffff;
  color: #424242;
  width: 100%;
  height: 100%;
  padding: 16px 16px;
  position: relative;
`;
export const AlertBox = styled.div`
  margin-bottom: ${props => (props.isValid ? '32px' : '16px')};
  margin-top: 0px;
`;
export const Alert = styled.span`
  display: inline-block;
  position: absolute;
  font-size: 14px;
  color: red;
  margin-top: 2px;
  padding-right: 16px;
`;

export const LogoImgWrapper = styled.div`
  position: absolute;
  left: 30%;
  bottom: 0;
  display: flex;
  justify-content: center;
`;

export const LogoImg = styled.img.attrs({
  src: `${process.env.PUBLIC_URL}/wanted.png`,
})`
  width: 130px;
  height: auto;
`;

export const TodoContainer = styled(Container)`
  flex-direction: column;
`;

export const TodoBox = styled(LoginBox)`
  width: 500px;
  height: 600px;
`;

export const TodoForm = styled(Form)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const TodoButton = styled(Button)`
  height: 60px;
  width: 60px;
  border-radius: 50%;
  font-size: 50px;
  font-weight: normal;
  margin: 0;
  padding: 0;
  cursor: pointer;
`;
export const TodoListWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const TodoWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const CheckBox = styled(Checkbox)``;

export const TodoTitle = styled.div`
  font-size: 18px;
`;
export const DoneTitle = styled(TodoTitle)`
  text-decoration: line-through;
  color: #c7c7c7;
`;
export const EditButton = styled.button`
  border: 0;
  border-radius: 10px;
  width: 35px;
  height: 35px;
  background-color: #4d7fff;
  color: #ffffff;
  font-weight: bold;
  font-size: 16px;
  margin-right: 4px;
  cursor: pointer;
`;
export const RemoveButton = styled(EditButton)`
  background-color: #d33;
`;
