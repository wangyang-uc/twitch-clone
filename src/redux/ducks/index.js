import { combineReducers } from "redux";

import authReducer from "./auth";
import { reducer as streamsReducer } from "./streams";
import { reducer as formReducer } from "redux-form";

const rootReducer = combineReducers({
  auth: authReducer,
  form: formReducer,
  streams: streamsReducer
});
export default rootReducer;
