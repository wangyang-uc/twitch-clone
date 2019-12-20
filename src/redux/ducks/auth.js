//GOOGLE OAUTH
//Action
const SIGN_IN = "SIGN_IN";
const SIGN_OUT = "SIGN_OUT";
//Action Creator
export function signInUser() {
  return { type: SIGN_IN };
}
export function signOutUser() {
  return { type: SIGN_OUT };
}
const INTIAL_STATE = {
    isSignedIn:null
}
//Reducer
export default function reducer(state = INTIAL_STATE, action = {}) {
  switch (action.type) {
    // do reducer stuff
    case SIGN_IN:
      return { ...state, isSignedIn: true };
    case SIGN_OUT:
      return { ...state, isSignedIn: false };
    default:
      return state;
  }
}
