const combineReducers = require('redux').combineReducers;
const routing = require('./routing.js');
const reducer = combineReducers({
  routing: routing
});

module.exports = reducer;
