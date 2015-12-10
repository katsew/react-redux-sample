const combineReducers = require('redux').combineReducers;
const routing = require('./routing.js');
const auth = require('./auth.js');
const gameList = require('./game-list.js');
const typeList = require('./type-list.js');

const reducer = combineReducers({
  router: routing,
  auth: auth,
  gameList: gameList,
  typeList: typeList
});

module.exports = reducer;
