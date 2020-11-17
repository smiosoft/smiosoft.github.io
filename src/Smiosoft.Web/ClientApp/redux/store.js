import { createStore, compose } from 'redux';

import rootReducer from './root-reducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer, /* preloadedState, */
  composeEnhancers(),
);

export default store;
