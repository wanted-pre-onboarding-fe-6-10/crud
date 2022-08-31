import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  height: 100vh;
`;
const Background = styled.div`
  display: flex;
  width: 70%;
  background-image: url(https://source.unsplash.com/random);
  background-size: cover;

  @media screen and (max-width: 576px) {
    width: 50%;
  }
  @media screen and (max-width: 992px) {
    width: 0%;
  }
`;
const Sign = styled.div`
  margin: 10px;
  display: flex;
  flexdirection: column;
  align-items: center;
  width: 30%;
  @media screen and (max-width: 576px) {
    width: 50%;
  }
  @media screen and (max-width: 992px) {
    width: 100%;
  }
`;
const Paper = styled.div`
  margin: 10px;
  display: flex;
  flexdirection: column;
  align-items: center;
`;
const Avatar = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  overflow: hidden;
  position: relative;
  font-size: 1.25rem;
  align-items: center;
  flex-shrink: 0;
  font-family: Roboto, Helvetica, Arial, sans-serif;
  line-height: 1;
  user-select: none;
  border-radius: 50%;
  justify-content: center;
  background-color: #f50057;
`;
const Form = styled.form`
  width: 100%;
`;
const Button = styled.button`
  width: 100%;
  height: 25px;
  background-color: #03a9f4;
  border-width: 0px;
  border-radius: 5px;
`;

export default { Container, Background, Sign, Paper, Avatar, Form, Button };
