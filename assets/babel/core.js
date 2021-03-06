"use strict";

// React
const React = require('react');
const ReactDom = require('react-dom');
const render = ReactDom.render;

// React Redux
const Provider = require('react-redux').Provider;

// require components
const DebugComponent = require('./util/debug.js').DebugComponent;
const DevTools = require('redux-devtools/lib/react').DevTools
const DebugPanel = require('redux-devtools/lib/react').DebugPanel
const LogMonitor = require('redux-devtools/lib/react').LogMonitor

const Router = require('./router.js');

// initial configuration
const history = require('./util/history.js');
const store = require('./store/single-source-of-truth.js');

// render component
const ApiClient = require('./service/api-client.js');
const actionCreator = require('./action/auth/');
const constants = require('./constant');

let accessToken = window.localStorage.getItem(constants.TOKEN_KEY);
if (accessToken != null && accessToken !== "" && accessToken !== "null") {
  ApiClient.checkToken(accessToken, (err, res) => {
    console.log(res);
    console.log('--- initial token check ---');
    if (err != null) {
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
      </div>
    ), document.getElementById('app'));
  });
} else {
  render((
    <div>
      <Provider store={store}>
        <Router history={history} />
      </Provider>
    </div>
  ), document.getElementById('app'));
}

// <DebugPanel top right bottom>
//   <DevTools store={store} monitor={LogMonitor} />
// </DebugPanel>
