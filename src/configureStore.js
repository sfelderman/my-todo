import { createStore, applyMiddleware, compose } from 'redux';
import reducer from './reducers';

const localStorageMiddleware = store => next => action  => {
    // Get the state before and after the action was performed
    next(action);
    const nextState = store.getState();
    localStorage.setItem('state', JSON.stringify(nextState));
  };

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function configureStore(preloadedState) {
  return createStore(
    reducer,
    preloadedState,
    composeEnhancers(
      applyMiddleware(localStorageMiddleware)
    )
  );
}