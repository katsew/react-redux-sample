const actionType = require('./action-type.js');

module.exports = Object.freeze({
  successFetch: (payload) => {
    console.log(payload);
    return {
      type: actionType.SUCCESS_FETCH_TYPE,
      payload: payload
    };
  },
  failureFetch: () => {
    return {
      type: actionType.FAILURE_FETCH_TYPE
    };
  }
});
