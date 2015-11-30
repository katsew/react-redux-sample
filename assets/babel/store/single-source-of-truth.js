const compose = require('redux').compose;
const createStore = require('redux').createStore;
const devTools = require('redux-devtools').devTools;
const reducer = require('../reducer/index.js');

const finalCreateStore = compose(
  devTools()
)(createStore);

const store = finalCreateStore(reducer);

module.exports = store;
