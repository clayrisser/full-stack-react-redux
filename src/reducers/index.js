import { combineReducers } from "redux";
import userActions from "./userActions";
import postActions from "./postActions";

const rootReducer = combineReducers({
  userActions,
  postActions
});

export default rootReducer;
