// React Router
const React = require('react');
const Route = require('react-router').Route;
const components = require('./component/index.js');
const ReactRouter = require('react-router').Router;

const routes = (
  <Route path="/" component={components.App}>
    <Route path="registar" component={components.Registration} />
    <Route path="login" component={components.Login} />
  </Route>
);

const Router = React.createClass({
  render() {
    return (
      <ReactRouter history={this.props.history}>
        {routes}
      </ReactRouter>
    );
  }
});

module.exports = Router;
