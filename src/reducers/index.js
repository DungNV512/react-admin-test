import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as FormReducer } from 'redux-form';

import AuthReducer from './auth';
import GifsReducer from './gifs';
import AgesReducer from './ages';
import GenderReducer from './gender';
import GeomapReducer from './geomap';
import ModalReducer from './modal';
import LocationReducer from './location';

const rootReducer = combineReducers({
  auth: AuthReducer,
  form: FormReducer,
  gifs: GifsReducer,
  modal: ModalReducer,
  router: routerReducer,
  ages: AgesReducer,
  gender: GenderReducer,
  geomap: GeomapReducer,
  location: LocationReducer,
});

export default rootReducer;