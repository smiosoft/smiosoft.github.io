import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import UnderConstruction from '~components/pages/UnderConstruction';

const AppRouter = () => (
  <Switch>
    <Route exact path="/" component={UnderConstruction} />
    <Route exact path="/under-construction" component={UnderConstruction} />
    <Redirect to="/under-construction" />
  </Switch>
);

export default AppRouter;
