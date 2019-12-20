import { combineReducers } from 'redux';
// import * as reducers from './ducks/index';
import authReducer from './auth'

const rootReducer = combineReducers({auth:authReducer});
export default rootReducer;