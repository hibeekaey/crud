import {
  GET_BUSINESSES,
  CREATE_BUSINESS,
  GET_BUSINESS,
  UPDATE_BUSINESS,
  DELETE_BUSINESS
} from "../constants";

export const getBusinesses = () => {
  return {
    type: GET_BUSINESSES
  };
};

export const createBusiness = () => {
  return {
    type: CREATE_BUSINESS
  };
};

export const getBusiness = () => {
  return {
    type: GET_BUSINESS
  };
};

export const updateBusiness = () => {
  return {
    type: UPDATE_BUSINESS
  };
};

export const deleteBusiness = () => {
  return {
    type: DELETE_BUSINESS
  };
};
