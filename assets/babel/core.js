"use strict";

// React
const React = require('react');
const ReactDom = require('react-dom');
const render = ReactDom.render;

// React Router
const Router = require('react-router').Router;
const Route = require('react-router').Route;

// Redux Simple Router
const syncReduxAndRouter = require('redux-simple-router').syncReduxAndRouter
const routeReducer = require('redux-simple-router').routeReducer

// Redux
const compose = require('redux').compose;
const combineReducers = require('redux').combineReducers;
const createStore = require('redux').createStore;

// Redux Devtools
const devTools = require('redux-devtools').devTools;
const DevTools = require('redux-devtools/lib/react').DevTools;
const DebugPanel = require('redux-devtools/lib/react').DebugPanel;
const LogMonitor = require('redux-devtools/lib/react').LogMonitor;

// React Redux
const Provider = require('react-redux').Provider;
const connect = require('react-redux').connect;

const createHashHistory = require('history').createHashHistory;
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

const routes = (
  <Route path="/" component={App}>
    <Route path="registar" component={NewRegistration} />
    <Route path="login" component={Login} />
  </Route>
);

const reducer = combineReducers({
  routing: routeReducer
});

const finalCreateStore = compose(
  devTools()
)(createStore);

const store = finalCreateStore(reducer);
const history = createHashHistory();
syncReduxAndRouter(history, store);

render((
  <div>
    <Provider store={store}>
      <Router history={history}>
        {routes}
      </Router>
    </Provider>
    <DebugPanel top left bottom>
      <DevTools store={store} monitor={LogMonitor} />
    </DebugPanel>
  </div>
), appContainer);
