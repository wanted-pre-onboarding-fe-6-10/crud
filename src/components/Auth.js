import { Navigate } from 'react-router-dom';
import { ACCESS_TOKEN } from '../const';

const Auth = ({ children }) => {
  const getToken = localStorage.getItem(ACCESS_TOKEN);

  if (!getToken) {
    return <Navigate to="/" replace={true} />;
  }

  return children;
};

export default Auth;
