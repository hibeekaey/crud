import {
  GET_BUSINESSES,
  CREATE_BUSINESS,
  GET_BUSINESS,
  UPDATE_BUSINESS,
  DELETE_BUSINESS
} from "../constants";

export default function business(state = {}, action) {
  switch (action.type) {
    case GET_BUSINESSES:
      return {
        ...state
      };
    case CREATE_BUSINESS:
      return {
        ...state
      };
    case GET_BUSINESS:
      return {
        ...state
      };
    case UPDATE_BUSINESS:
      return {
        ...state
      };
    case DELETE_BUSINESS:
      return {
        ...state
      };
    default:
      return state;
  }
}
