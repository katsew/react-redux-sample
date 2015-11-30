"use strict";

// React
const React = require('react');
const ReactDom = require('react-dom');
const render = ReactDom.render;

// React Redux
const Provider = require('react-redux').Provider;
const connect = require('react-redux').connect;

// require components
const DebugComponent = require('./util/debug.js').DebugComponent;
const Router = require('./router.js');

// initial configuration
const createHashHistory = require('history').createHashHistory;
const history = createHashHistory();
const store = require('./store/single-source-of-truth.js');
const syncReduxAndRouter = require('redux-simple-router').syncReduxAndRouter;
syncReduxAndRouter(history, store);

// render component
render((
  <div>
    <Provider store={store}>
      <Router history={history} />
    </Provider>
    <DebugComponent store={store} />
  </div>
), document.getElementById('app'));
