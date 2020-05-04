import { createStore, applyMiddleware, compose } from 'redux';
import rootReducers from './reducers';

const middlewares = [];

const enhancers = [];
/* 
if (process.browser) {
  const composed =
    window &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      trace: true,
      traceLimit: 25,
    });
  enhancers.push(composed);
} 
*/

export default createStore(
  rootReducers,
  compose(applyMiddleware(...middlewares), ...enhancers),
);
