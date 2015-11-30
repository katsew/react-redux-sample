const React = require('react');
const Route = require('react-router').Route;
const IndexRoute = require('react-router').IndexRoute;
const components = require('./');
const routes = (
  <Route path="/" component={components.App}>
    <IndexRoute component={components.Login} />
    <Route path="registar" component={components.Registration} />
    <Route path="login" component={components.Login} />
  </Route>
);

module.exports = routes;
