const actionType = require('../action/auth/action-type.js');
const storage = window.localStorage;
const initialState = {
  isAuth: storage.getItem("token") != null ? true : false,
  lastModified: Date.now()
};

const auth = (state = initialState, action) => {
  switch(action.type) {
    case actionType.SUCCESS_LOGIN:
      storage.setItem("token", "this is my key");
      return Object.assign({}, state, {
        isAuth: true,
        lastModified: Date.now()
      });
      break;
    case actionType.SUCCESS_LOGOUT:
      storage.setItem("token", null);
      storage.removeItem("token");
      return Object.assign({}, state, {
        isAuth: false
      });
      break;
    case actionType.FAILURE_LOGIN:
    case actionType.FAILURE_LOGOUT:
    default:
      return state;
  }
};

module.exports = auth;
