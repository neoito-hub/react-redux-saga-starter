import { types } from './actions'

const initialState = { isLoggedIn: false, loggingIn: false, error: null, user: null};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case types.REQUEST_LOGIN:
      return { ...state, loggingIn: true, error: null };
    case types.LOGIN_SUCCESS:
      return { ...state, loggingIn: false, isLoggedIn: true, user: action.payload };
    case types.LOGIN_ERROR:
      return { ...state, loggingIn: false, user: null, error: action.payload };
    default:
      return state;
  }
}
