const actionType = require('../action/auth/action-type.js');
const initialState = {
  isAuth: false
};

const auth = (state = initialState, action) => {
  switch(action.type) {
    case actionType.SUCCESS_LOGIN:
      return Object.assign({}, state, {
        isAuth: true
      });
      break;
    case actionType.SUCCESS_LOGOUT:
      return Object.assign({}, state, initialState);
      break;
    case actionType.FAILURE_LOGIN:
    case actionType.FAILURE_LOGOUT:
    default:
      return state;
  }
};

module.exports = auth;
