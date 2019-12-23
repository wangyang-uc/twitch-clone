import server from "../../apis";
import history from "../../history"
import _ from "lodash";
//Actions
const CREATE_STREAM = "CREATE_STREAM";
const READ_STREAM = "READ_STREAM";
const UPDATE_STREAM = "UPDATE_STREAM";
const DELETE_STREAM = "DELETE_STREAM";
const READ_STREAMS = "READ_STREAMS";

//Initial State
const initialState = {};

//Reducer
export const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CREATE_STREAM:
      return { ...state, [action.payload.id]: action.payload };
    case READ_STREAM:
      return { ...state, [action.payload.id]: action.payload };
    case UPDATE_STREAM:
      return { ...state, [action.payload.id]: action.payload };
    case DELETE_STREAM:
      return _.omit(state, action.payload);
    case READ_STREAMS:
      return { ...state, ..._.mapKeys(action.payload, "id") };
    default:
      return state;
  }
};
//Action Creaters
export const createStream = formValues => async (dispatch,getState) => {
  const {userId} = getState().auth;
  const response = await server.post("/streams", {...formValues,userId});
  dispatch({ type: CREATE_STREAM, payload: response.data });
  history.push('/') //Program Nevgiation
};

export const readStream = id => async dispatch => {
  const response = await server.get(`/streams/${id}`);
  dispatch({ type: READ_STREAM, payload: response.data });
};

export const updateStream = (id, formValues) => async dispatch => {
  const response = await server.patch(`/streams/${id}`, formValues);//Different Between PUT and PATCH
  dispatch({ type: UPDATE_STREAM, payload: response.data });
  history.push('/')
};

export const deleteStream = id => async dispatch => {
  await server.delete(`/streams/${id}`);
  dispatch({ type: DELETE_STREAM, payload: id });
  history.push('/')
};
export const readStreams = () => async dispatch => {
  const response = await server.get("/streams");
  dispatch({ type: READ_STREAMS, payload: response.data });
};
// side effects, only as applicable
// e.g. thunks, epics, etc
