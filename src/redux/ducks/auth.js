//GOOGLE OAUTH
//Action
const SIGN_IN = "SIGN_IN";
const SIGN_OUT = "SIGN_OUT";
//Action Creator
export function signInUser(userId) {
  return { type: SIGN_IN, payload: userId };
}
export function signOutUser() {
  return { type: SIGN_OUT };
}
const INTIAL_STATE = {
  isSignedIn: null,
  userId: null
};
//Reducer
export default function reducer(state = INTIAL_STATE, action = {}) {
  switch (action.type) {
    // do reducer stuff
    case SIGN_IN:
      return { ...state, isSignedIn: true, userId: action.payload };
    case SIGN_OUT:
      return { ...state, isSignedIn: false, userId: null };
    default:
      return state;
  }
}
