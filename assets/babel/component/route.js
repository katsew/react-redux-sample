const React = require('react');
const Route = require('react-router').Route;
const IndexRoute = require('react-router').IndexRoute;
const components = require('./');
const AuthenticatedComponent = require('./auth.js');

const routes = (
  <Route path="/" component={components.App}>
    <IndexRoute component={AuthenticatedComponent(components.Welcome)} />
    <Route path="registar" component={components.Registration} />
    <Route path="login" component={components.Login} />
    <Route path="welcome" component={AuthenticatedComponent(components.Welcome)} />
    <Route path="dashboard/:gameId" component={components.Dashboard} />
  </Route>
);

module.exports = routes;
