import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import App from './app/App';
import reducers from './state/reducers';

const store = createStore(reducers, {
  data: true,
  err: null,
  fetching: false
}, applyMiddleware(thunk));
const content = <Provider store={store}><App/></Provider>;
ReactDOM.render(content, document.getElementById('root'));
