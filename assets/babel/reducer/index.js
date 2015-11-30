const combineReducers = require('redux').combineReducers;
const routing = require('./routing.js');
const reducer = combineReducers({
  router: routing
});

module.exports = reducer;
