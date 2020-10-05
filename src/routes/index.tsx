import React from 'react';
import { Route, Switch } from 'react-router-dom';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={() => <h1>Hello</h1>} />
  </Switch>
);

export default Routes;
