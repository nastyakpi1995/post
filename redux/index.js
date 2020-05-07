import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { createLogger } from 'redux-logger';
import isServer from '../utils/isServer';

import middlewareSettings from './middleware';
import * as reducers from './reducers';

const composeEnhancers =
  (!isServer() && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

export default function createReduxStore(preloadedState) {
  const middleware = [middlewareSettings];

  if (process.env.NODE_ENV === `development`) {
    middleware.push(createLogger({ collapsed: true, duration: true }));
  }

  return createStore(
    combineReducers(reducers),
    preloadedState,
    composeEnhancers(applyMiddleware(...middleware)),
  );
}
