import { createGlobalStyle } from 'styled-components';

import 'modern-normalize/modern-normalize.css';

import woff2 from '../../wwwroot/fonts/open-sans-v16-latin-regular.woff2';
import woff from '../../wwwroot/fonts/open-sans-v16-latin-regular.woff';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    font-display: fallback;
    src:
      local('Open Sans Regular'),
      local('OpenSans-Regular'),
      url('${woff2}') format('woff2'),
      url('${woff}') format('woff');
  }

  body {
    font-family: Open Sans, Segoe UI, Tahoma, sans-serif !important;
    background-color: #121212;
    color: #fff;
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeSpeed;
    word-wrap: break-word;
    padding: 0;
    margin: 0;

    & > div#app {
      height: 100vh;
      display: flex;
    }
  }
`;

export default GlobalStyle;
