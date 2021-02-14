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

export const addCategory = (category) => {
  return (dispatch) => {
    return new Promise((resolve, reject) => {
      if (category.name !== null && category.name !== "") {
        dispatch(createCategory(category));
        resolve(true);
      } else {
        reject(false);
      }
    });
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

export const editCategory = (category) => {
  return (dispatch) => {
    return new Promise((resolve, reject) => {
      if (category.name !== null && category.name !== "") {
        dispatch(updateCategory(category));
        resolve(true);
      } else {
        reject(false);
      }
    });
  };
};

export const updateCategory = (category) => {
  return {
    type: UPDATE_CATEGORY,
    payload: category
  };
};

export const deleteCategory = (id) => {
  return {
    type: DELETE_CATEGORY,
    payload: id
  };
};
