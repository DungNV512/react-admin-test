import { SIGN_IN_USER, SIGN_OUT_USER } from '../actions';

const initialState =  {
  authenticated: false,
  authorize: null,
};

export default function gifs(state = initialState, action) {
  switch (action.type) {
    case SIGN_IN_USER:
      return {
        ...state, authenticated: true, authorize: action.payload
      };
    case SIGN_OUT_USER:
      return {
        ...state, authenticated: false, authorize: null
      };
    default:
      return state;
  }
}