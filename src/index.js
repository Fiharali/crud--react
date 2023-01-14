import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {Provider} from 'react-redux'
import {legacy_createStore} from 'redux'
import Reducer from './Config/Reducer';


const store = legacy_createStore(Reducer)


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider  store={store}>
    <App />
  </Provider>
);

