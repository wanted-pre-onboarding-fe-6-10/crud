export const LocalStorageKey = 'Token';

export const SetTokenInStorage = Token => {
  localStorage.setItem(LocalStorageKey, Token);
};

export const GetTokenInStorage = () => {
  const token = localStorage.getItem(LocalStorageKey);
  if (token) {
    return token;
  }
  return false;
};

// export const isLogin = () => {
//   console.log(123, !!localStorage.getItem(LocalStorageKey));
//   return !!localStorage.getItem(LocalStorageKey);
// };
