// React Router
const React = require('react');
const ReactRouter = require('react-router').Router;
const routes = require('./component/route.js');

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
