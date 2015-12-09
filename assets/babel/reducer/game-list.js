const actionType = require('../action/gamelist/action-type.js');
const initialState = [];

const gameList = (state = initialState, action) => {
  switch(action.type) {
    case actionType.SUCCESS_FETCH:
      return state.concat(action.payload)
      break;
    case actionType.FAILURE_FETCH:
    default:
      return state;
  }
};

module.exports = gameList;
