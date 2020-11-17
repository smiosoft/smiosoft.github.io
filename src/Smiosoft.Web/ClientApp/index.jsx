import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import store from './redux/store';
import GlobalStyle from './style/GlobalStyle';
import App from './App';

const ELEMENT = (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    <GlobalStyle />
  </Provider>
);
const MOUNT_NODE = document.getElementById('app');

ReactDOM.render(ELEMENT, MOUNT_NODE);
