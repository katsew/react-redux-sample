const actionType = require('../action/typelist/action-type.js');
const initialState = [];

const typeList = (state = initialState, action) => {
  switch(action.type) {
    case actionType.SUCCESS_FETCH_TYPE:
      return state.concat(action.payload).filter((item, idx, arr) => {
        return arr.indexOf(item) === idx;
      });
      break;
    case actionType.FAILURE_FETCH_TYPE:
    default:
      return state;
  }
};

module.exports = typeList;
