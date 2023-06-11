import { createRoot } from 'react-dom/client';
import 'materialize-css/dist/css/materialize.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';

import App from './components/App';
import reducers from './reducers';

const domNode = document.getElementById('root');
const root = createRoot(domNode);

const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

root.render(
  <Provider store={store}>
    <App />
  </Provider>
  // document.querySelector('#root')
);
