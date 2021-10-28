import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import Auth from '../src/Auth'
import store from "./app/store"


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Auth />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


