import { token, value } from 'utils/constants'

export const setToken = (myToken) => {
  window.localStorage.setItem(token, myToken);
}

export const checkToken = () => {
  if (window.localStorage.getItem("token")) {
      return true;
  } else {
      return false;
  }
}

export const getToken = () => {
  const token = window.localStorage.getItem("token");
  if (token) {
      return token;
  } else {
      return null;
  }
}