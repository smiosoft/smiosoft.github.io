import React from 'react';
import { Helmet } from 'react-helmet';

import Styles from './App.styles';

const App = () => (
  <Styles.Wrapper>
    <Helmet titleTemplate="%s / Smiosoft" defaultTitle="Smiosoft" />
    <h1>Smiosoft</h1>
  </Styles.Wrapper>
);

export default App;
