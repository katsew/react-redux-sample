"use strict";

const React = require('react');
const ReactDom = require('react-dom');
const render = ReactDom.render;
const Router = require('react-router').Router;
const Route = require('react-router').Route;
const Link = require('react-router').Link;
const appContainer = document.getElementById('app');

// React Components
const NewRegistration = require('./components/NewRegistration.js');
const Login = require('./components/Login.js');

const App = React.createClass({
  render() {
    return (
      <div>
        <h2>トップページ</h2>
        <ul>
          <li><Link to="/registar">新規登録</Link></li>
          <li><Link to="/login">ログイン</Link></li>
        </ul>
        <div>
          {this.props.children}
        </div>
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
