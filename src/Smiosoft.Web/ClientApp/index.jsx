import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import GlobalStyle from './style/GlobalStyle';
import App from './App';

const ELEMENT = (
  <>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    <GlobalStyle />
  </>
);
const MOUNT_NODE = document.getElementById('app');

ReactDOM.render(ELEMENT, MOUNT_NODE);
