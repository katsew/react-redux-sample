const actionType = require('../action/typelist/action-type.js');
const _ = require('lodash');
const initialState = {};

const typeList = (state = initialState, action) => {
  switch(action.type) {
    case actionType.SUCCESS_FETCH_TYPE:
      return _.merge({}, state, action.payload);
      break;
    case actionType.FAILURE_FETCH_TYPE:
    default:
      return state;
  }
};

module.exports = typeList;
