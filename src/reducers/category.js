import {
  SET_ACTIVE_CATEGORY,
  CREATE_CATEGORY,
  UPDATE_CATEGORY,
  DELETE_CATEGORY
} from "../constants";
import { v4 } from "uuid";

export default function category(
  state = { data: [], activeCategory: null },
  action
) {
  let data, filteredData;
  switch (action.type) {
    case SET_ACTIVE_CATEGORY:
      return {
        ...state,
        activeCategory: action.payload
      };
    case CREATE_CATEGORY:
      data = [...state.data];
      filteredData = data.filter(
        (category) => category.name === action.payload.name
      );
      if (
        !filteredData.length &&
        action.payload.name !== null &&
        action.payload.name !== ""
      ) {
        data.push({ id: v4(), ...action.payload });
      }
      return {
        ...state,
        data
      };
    case UPDATE_CATEGORY:
      data = [...state.data];
      const updatedData = data.map((category) => {
        if (category.id === action.payload.id) {
          return action.payload;
        } else {
          return category;
        }
      });
      return {
        ...state,
        data: updatedData,
        activeCategory: null
      };
    case DELETE_CATEGORY:
      data = [...state.data];
      filteredData = data.filter((category) => category.id !== action.payload);
      return {
        ...state,
        data: filteredData,
        activeCategory: null
      };
    default:
      return state;
  }
}
