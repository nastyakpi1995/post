import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { createLogger } from 'redux-logger';
import isServer from '../utils/isServer';

import rootSaga from './sagas';

import reducers from './reducers';

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers =
  (!isServer() && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

export default function createReduxStore(preloadedState) {
  const middleware = [sagaMiddleware];

  if (process.env.NODE_ENV === `development`) {
    middleware.push(createLogger({ collapsed: true, duration: true }));
  }

  const store = createStore(
    reducers,
    preloadedState,
    composeEnhancers(applyMiddleware(...middleware)),
  );
  sagaMiddleware.run(rootSaga);

  return store;
}
