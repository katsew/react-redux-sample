const actionType = require('./action-type.js');

module.exports = Object.freeze({
  successFetch: (payload) => {
    return {
      type: actionType.SUCCESS_FETCH,
      payload: payload
    };
  },
  failureFetch: () => {
    return {
      type: actionType.FAILURE_FETCH
    };
  }
});
