import { combineReducers } from "redux";
import { reducer as form } from "redux-form";
import user from "./user";
import category from "./category";
import business from "./business";

export default combineReducers({
  form,
  user,
  category,
  business
});
