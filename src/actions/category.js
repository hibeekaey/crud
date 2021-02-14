import {
  SET_ACTIVE_CATEGORY,
  CREATE_CATEGORY,
  GET_CATEGORY,
  UPDATE_CATEGORY,
  DELETE_CATEGORY
} from "../constants";

export const setActiveCategory = (category) => {
  return {
    type: SET_ACTIVE_CATEGORY,
    payload: category
  };
};

export const createCategory = (category) => {
  return {
    type: CREATE_CATEGORY,
    payload: category
  };
};

export const getCategory = () => {
  return {
    type: GET_CATEGORY
  };
};

export const updateCategory = (category) => {
  return {
    type: UPDATE_CATEGORY,
    payload: category
  };
};

export const deleteCategory = () => {
  return {
    type: DELETE_CATEGORY
  };
};
