import React from 'react';
import ReactDOM from 'react-dom';
import '../scss/main.scss'
import App from './App';
import {createStore} from 'redux';
import {Provider } from 'react-redux';
import allReducers from './reducers';


const store = createStore(allReducers,  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;


ReactDOM.render(
  <Provider store={store} >
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

