import React from 'react';
import { Switch } from 'react-router-dom';
import Dashboard from '../pages/dashboard';
import Deposit from '../pages/deposit';
import Login from '../pages/login';
import Register from '../pages/register';
import Sell from '../pages/sell';
import RouteContainer from './private';

const Routes: React.FC = () => (
  <Switch>
    <RouteContainer path="/" exact component={Login} />
    <RouteContainer path="/criar-conta" component={Register} />
    <RouteContainer path="/home" component={Dashboard} isPrivate />
    <RouteContainer path="/depositar" component={Deposit} isPrivate />
    <RouteContainer path="/vender" component={Sell} isPrivate />
  </Switch>
);

export default Routes;
