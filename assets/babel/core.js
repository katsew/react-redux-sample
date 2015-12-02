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
const history = require('./util/history.js');
const store = require('./store/single-source-of-truth.js');

// render component
const ApiClient = require('./service/api-client.js');
const actionCreator = require('./action/auth/');
ApiClient.checkAuth((err, res) => {
  if (err) {
    store.dispatch(actionCreator.failureLogin());
    history.pushState(null, "/login");
  } else {
    store.dispatch(actionCreator.successLogin());
    history.pushState(null, "/welcome");
  }
  console.log('--- initial state ---');
  console.log(store.getState());
  render((
    <div>
      <Provider store={store}>
        <Router history={history} />
      </Provider>
      {/* <DebugComponent store={store} /> */}
    </div>
  ), document.getElementById('app'));

});
