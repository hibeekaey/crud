import {
  GET_CATEGORIES,
  CREATE_CATEGORY,
  GET_CATEGORY,
  UPDATE_CATEGORY,
  DELETE_CATEGORY
} from "../constants";

export default function category(state = {}, action) {
  switch (action.type) {
    case GET_CATEGORIES:
      return {
        ...state
      };
    case CREATE_CATEGORY:
      return {
        ...state
      };
    case GET_CATEGORY:
      return {
        ...state
      };
    case UPDATE_CATEGORY:
      return {
        ...state
      };
    case DELETE_CATEGORY:
      return {
        ...state
      };
    default:
      return state;
  }
}
