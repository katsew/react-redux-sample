"use strict";

// React
const React = require('react');
const ReactDom = require('react-dom');
const render = ReactDom.render;

// React Redux
const Provider = require('react-redux').Provider;

// require components
const DebugComponent = require('./util/debug.js').DebugComponent;
const Router = require('./router.js');

// initial configuration
const createHistory = require('history/lib/createHashHistory');
const history = createHistory();
const store = require('./store/single-source-of-truth.js');

// render component
render((
  <div>
    <Provider store={store}>
      <Router history={history} />
    </Provider>
    <DebugComponent store={store} />
  </div>
), document.getElementById('app'));
