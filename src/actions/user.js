import { LOGIN_USER, LOGOUT_USER } from "../constants";

export const login = (email, password) => {
  return (dispatch) => {
    console.log(email, password);

    if (email === "admin@email.com" && password === "@Password123") {
      dispatch(loginUser());
    }
  };
};

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
