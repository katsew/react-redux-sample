const combineReducers = require('redux').combineReducers;
const routing = require('./routing.js');
const auth = require('./auth.js');
const gameList = require('./game-list.js');
const reducer = combineReducers({
  router: routing,
  auth: auth,
  gameList: gameList
});

module.exports = reducer;
