"use strict";

// React
const React = require('react');
const ReactDom = require('react-dom');
const render = ReactDom.render;

// React Router
const Link = require('react-router').Link;
const Route = require('react-router').Route;

// Redux Router
const reduxReactRouter = require('redux-router').reduxReactRouter;
const routerStateReducer = require('redux-router').routerStateReducer;
const ReduxRouter = require('redux-router').ReduxRouter;
const pushState = require('redux-router').pushState;

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

const createHistory = require('history').createHistory;
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
connect(
  (state) => {
    return {q: this.state.router.location.query.q};
  },
  {pushState}
)(App);

const routes = (
  <Route path="/" component={App}>
    <Route path="registar" component={NewRegistration} />
    <Route path="login" component={Login} />
  </Route>
);

const reducer = combineReducers({
  router: routerStateReducer
});

const store = compose(
  reduxReactRouter({
    routes,
    createHistory
  }),
  devTools()
)(createStore)(reducer);

render((
  <div>
    <Provider store={store}>
      <ReduxRouter>
        {routes}
      </ReduxRouter>
    </Provider>
    <DebugPanel top left bottom>
      <DevTools store={store} monitor={LogMonitor} />
    </DebugPanel>
  </div>
), appContainer);
