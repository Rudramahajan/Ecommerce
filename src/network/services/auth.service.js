export const logoutService = () => {
  window.localStorage.clear();
}

export const loginService = (email, password) => {
  if (email === 'rudra@gmail.com' && password === 'mahajan23') {
    return true;
  }
  return false;
}