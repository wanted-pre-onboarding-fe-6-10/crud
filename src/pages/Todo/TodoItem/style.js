import styled from 'styled-components';

const Paper = styled.div`
  padding: 10px;
  display: flex;
  align-items: center;
  margin: 10px;
  box-shadow: inset 0 0 1px #000000;
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

export default { Paper, Background };
