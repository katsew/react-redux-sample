const actionType = require('./action-type.js');

module.exports = Object.freeze({
  successLogin: () => {
    return {
      type: actionType.SUCCESS_LOGIN
    };
  },
  failureLogin: () => {
    return {
      type: actionType.FAILURE_LOGIN
    };
  },
  successLogout: () => {
    return {
      type: actionType.SUCCESS_LOGOUT
    };
  },
  failureLogout: () => {
    return {
      type: actionType.FAILURE_LOGOUT
    };
  }
});
