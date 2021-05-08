import { combineReducers } from "redux";
import errorReducer from "./errorReducer";
import logReducer from "./logReducer";
import staffReducer from "./staffReducer";
import userReducer from "./userReducer";

export default combineReducers({
  log: logReducer,
  staff: staffReducer,
  user: userReducer,
  errors: errorReducer,
});
