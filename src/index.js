import React from 'react';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './configureStore';

let initialState = localStorage.getItem('state') || {};
if (initialState.length) initialState = JSON.parse(initialState);
const store = configureStore(initialState);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
