import { combineReducers } from "redux";
import user from "./user";
import category from "./category";
import business from "./business";

export default combineReducers({
  user,
  category,
  business
});
