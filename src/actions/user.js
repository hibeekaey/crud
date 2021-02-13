import { LOGIN_USER, LOGOUT_USER } from "../constants";

export const loginUser = () => {
  return {
    type: LOGIN_USER
  };
};

export const logoutUser = () => {
  return {
    type: LOGOUT_USER
  };
};
