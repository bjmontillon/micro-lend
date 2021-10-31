import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import App from '../src/App'
import store from "./app/store"
import theme from './theme'
import ThemeProvider from '@mui/material/styles/ThemeProvider'


ReactDOM.render(
  <React.StrictMode>
    
      <Provider store={store}>
        <ThemeProvider theme={theme}>
            <App />
          </ThemeProvider>
      </Provider>
    
  </React.StrictMode>,
  document.getElementById('root')
);


