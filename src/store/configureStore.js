//import { createStore } from 'redux';
import { createStore, compose, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';
import rootReducer from '../reducers';
import createHistory from 'history/createBrowserHistory';
import { routerMiddleware } from 'react-router-redux';
import { loadState, saveState } from './localStorage';

export const history = createHistory();

/* Persisting state to the local storage */
const persistedState = loadState();

export function configureStore(initialState) {
  const store = createStore(
    rootReducer,
    //initialState,
    persistedState,
    compose (
        applyMiddleware(ReduxPromise, routerMiddleware(history)),
        window.devToolsExtension ? window.devToolsExtension() : f => f
    )
    //window.devToolsExtension ? window.devToolsExtension() : undefined
  );
  store.subscribe(() => {
    saveState({
      todos: store.getState().todos,
    });
  });
  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers').default;
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}