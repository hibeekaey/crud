import { LOGIN_USER, LOGOUT_USER } from "../constants";

export default function user(state = {}, action) {
  switch (action.type) {
    case LOGIN_USER:
      return {
        ...state
      };
    case LOGOUT_USER:
      return {
        ...state
      };
    default:
      return state;
  }
}
