const actionType = require('../action/manipulate-type-list/action-type.js');
const initialState = [];

const manipulateTypeList = (state = initialState, action) => {
  switch(action.type) {
    case actionType.ADD:
      return state.concat(action.payload)
      break;
    case actionType.REMOVE:
      return state.filter((item, idx, arr) => {
        return idx !== action.payload
      });
      break;
    default:
      return state;
  }
};

module.exports = manipulateTypeList;
