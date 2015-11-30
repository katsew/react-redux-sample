const compose = require('redux').compose;
const createStore = require('redux').createStore;
const devTools = require('redux-devtools').devTools;
const reducer = require('../reducer/index.js');
const reduxReactRouter = require('redux-router').reduxReactRouter;
const createHistory = require('history/lib/createHashHistory');
const history = createHistory();
const routes = require('../component/route.js');
const finalCreateStore = compose(
  reduxReactRouter({
    routes,
    history
  }),
  devTools()
)(createStore);

const store = finalCreateStore(reducer);
module.exports = store;
