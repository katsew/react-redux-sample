const actionType = require('../action/analytics/action-type.js');
const _ = require('lodash');
const initialState = {};

const typeList = (state = initialState, action) => {
  switch(action.type) {
    case actionType.SUCCESS_FETCH_STATICS:
      return _.merge({}, state, action.payload);
      break;
    case actionType.FAILURE_FETCH_STATICS:
    default:
      return state;
  }
};

module.exports = typeList;
