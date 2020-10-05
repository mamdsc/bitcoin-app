import React from 'react';
import { Switch } from 'react-router-dom';
import Login from '../pages/login';
import RouteContainer from './private';

const Routes: React.FC = () => (
  <Switch>
    <RouteContainer path="/home" component={() => <h1>Hello</h1>} isPrivate />
    <RouteContainer path="/" exact component={Login} />
  </Switch>
);

export default Routes;
