import React from 'react';
import { Helmet } from 'react-helmet';

import AppRouter from './components/routing/AppRouter';
import Styles from './App.styles';

const App = () => (
  <Styles.Wrapper>
    <Helmet titleTemplate="%s / Smiosoft" defaultTitle="Smiosoft" />
    <AppRouter />
  </Styles.Wrapper>
);

export default App;
