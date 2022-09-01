export const checkTokenExists = () => {
  const token = localStorage.getItem('access_token');
  return token !== null;
};
