import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./ducks";
import reudxThunk from "redux-thunk"

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(reudxThunk))
);
