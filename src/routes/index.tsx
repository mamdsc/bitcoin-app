import React from 'react';
import { Switch } from 'react-router-dom';
import Login from '../pages/login';
import Register from '../pages/register';
import RouteContainer from './private';

const Routes: React.FC = () => (
  <Switch>
    <RouteContainer path="/" exact component={Login} />
    <RouteContainer path="/criar-conta" component={Register} />
    <RouteContainer path="/home" component={() => <h1>Hello</h1>} isPrivate />
  </Switch>
);

export default Routes;
