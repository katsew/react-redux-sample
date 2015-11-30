const actionType = require('./action-type.js');

module.exports = Object.freeze({
  login: () => {
    return {
      type: actionType.LOGIN
    };
  },
  logout: () => {
    return {
      type: actionType.LOGOUT
    };
  }
});
