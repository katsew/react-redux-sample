"use strict";

const React = require('react');
const ReactDom = require('react-dom');
const render = ReactDom.render;
const Router = require('react-router').Router;
const Route = require('react-router').Route;
const Link = require('react-router').Link;
const appContainer = document.getElementById('app');

// React Components
const Header = require('./component/header.js');
const NewRegistration = require('./component/registration.js');
const Login = require('./component/login.js');

const App = React.createClass({
  render() {
    return (
      <div className="app-inner">
        <Header />
        {this.props.children}
      </div>
    );
  }
});

render(
  (
    <Router>
      <Route path="/" component={App}>
        <Route path="registar" component={NewRegistration} />
        <Route path="login" component={Login} />
      </Route>
    </Router>
  )
, appContainer);
