import { REQUEST_GIFS } from '../actions';


// avoid any issues with gifs coming back as null or undefined
const initialState =  {
  data: []
};

export default function gifs(state = initialState, action) {
  switch (action.type) {
    case REQUEST_GIFS:
      return {
        //object spread syntax, copying all ennumerable props from the previous version, 
        //then updates just the value of the the data key on the new object
        // = return Object.assign({}, state, {data: action.payload.body.data});
        ...state, data: action.payload.body.data
      };
    default:
      return state;
  }
}