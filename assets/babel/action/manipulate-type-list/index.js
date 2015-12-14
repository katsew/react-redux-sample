const actionType = require('./action-type.js');

module.exports = Object.freeze({
  add: (payload) => {
    console.log(payload);
    return {
      type: actionType.ADD,
      payload: payload
    };
  },
  remove: (payload) => {
    return {
      type: actionType.REMOVE,
      payload: payload
    };
  }
});
