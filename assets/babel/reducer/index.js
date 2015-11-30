const combineReducers = require('redux').combineReducers;
const routing = require('./routing.js');
const auth = require('./auth.js');
const reducer = combineReducers({
  router: routing,
  auth: auth
});

module.exports = reducer;
