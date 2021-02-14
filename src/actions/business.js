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
