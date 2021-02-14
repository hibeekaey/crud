import {
  SET_ACTIVE_BUSINESS,
  CREATE_BUSINESS,
  GET_BUSINESS,
  UPDATE_BUSINESS,
  DELETE_BUSINESS
} from "../constants";

export const setActiveBusiness = (business) => {
  return {
    type: SET_ACTIVE_BUSINESS,
    payload: business
  };
};

export const addBusiness = (business) => {
  return (dispatch) => {
    return new Promise((resolve, reject) => {
      if (
        business.name !== null &&
        business.name !== "" &&
        business.description !== null &&
        business.description !== "" &&
        business.phone !== null &&
        business.phone !== "" &&
        business.url !== null &&
        business.categories &&
        business.categories.length
      ) {
        dispatch(createBusiness(business));
        resolve(true);
      } else {
        reject(false);
      }
    });
  };
};

export const createBusiness = (business) => {
  return {
    type: CREATE_BUSINESS,
    payload: business
  };
};

export const getBusiness = () => {
  return {
    type: GET_BUSINESS
  };
};

export const editBusiness = (business) => {
  return (dispatch) => {
    return new Promise((resolve, reject) => {
      if (
        business.name !== null &&
        business.name !== "" &&
        business.description !== null &&
        business.description !== "" &&
        business.phone !== null &&
        business.phone !== "" &&
        business.url !== null &&
        business.categories &&
        business.categories.length
      ) {
        dispatch(updateBusiness(business));
        resolve(true);
      } else {
        reject(false);
      }
    });
  };
};

export const updateBusiness = (business) => {
  return {
    type: UPDATE_BUSINESS,
    payload: business
  };
};

export const deleteBusiness = (id) => {
  return {
    type: DELETE_BUSINESS,
    payload: id
  };
};
