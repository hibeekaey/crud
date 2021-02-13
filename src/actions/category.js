import {
  GET_CATEGORIES,
  CREATE_CATEGORY,
  GET_CATEGORY,
  UPDATE_CATEGORY,
  DELETE_CATEGORY
} from "../constants";

export const getCategories = () => {
  return {
    type: GET_CATEGORIES
  };
};

export const createCategory = () => {
  return {
    type: CREATE_CATEGORY
  };
};

export const getCategory = () => {
  return {
    type: GET_CATEGORY
  };
};

export const updateCategory = () => {
  return {
    type: UPDATE_CATEGORY
  };
};

export const deleteCategory = () => {
  return {
    type: DELETE_CATEGORY
  };
};
