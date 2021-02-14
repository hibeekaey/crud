import {
  SET_ACTIVE_BUSINESS,
  CREATE_BUSINESS,
  UPDATE_BUSINESS,
  DELETE_BUSINESS
} from "../constants";
import { v4 } from "uuid";

export default function business(
  state = { data: [], activeBusiness: null },
  action
) {
  let data;
  switch (action.type) {
    case SET_ACTIVE_BUSINESS:
      return {
        ...state,
        activeBusiness: action.payload
      };
    case CREATE_BUSINESS:
      data = [...state.data];
      const filteredData = data.filter(
        (business) => business.name === action.payload.name
      );
      if (
        !filteredData.length &&
        action.payload.name !== null &&
        action.payload.name !== "" &&
        action.payload.description !== null &&
        action.payload.description !== "" &&
        action.payload.phone !== null &&
        action.payload.phone !== "" &&
        action.payload.url !== null &&
        action.payload.url !== ""
      ) {
        data.push({ id: v4(), ...action.payload });
      }
      return {
        ...state,
        data
      };
    case UPDATE_BUSINESS:
      data = [...state.data];
      const updatedData = data.map((business) => {
        if (business.id === action.payload.id) {
          return action.payload;
        } else {
          return business;
        }
      });
      return {
        ...state,
        data: updatedData,
        activeBusiness: null
      };
    case DELETE_BUSINESS:
      data = [...state.data];
      const filteredData = data.filter(
        (business) => business.id !== action.payload
      );
      return {
        ...state,
        data: filteredData,
        activeBusiness: null
      };
    default:
      return state;
  }
}
