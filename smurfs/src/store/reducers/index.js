import { combineReducers } from "redux";
import { formReducer } from "./formReducer";
import { trollCardReducer } from "./trollCardReducer";
import { pexelsReducer } from "./pexelsReducer";
import { deleteReducer } from "./deleteReducer";
import { trollPostReducer } from './trollPostReducer'
export default combineReducers({
  formReducer,
  trollCardReducer,
  pexelsReducer,
  deleteReducer,
  trollPostReducer,
});
