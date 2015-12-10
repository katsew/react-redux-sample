const actionType = require('./action-type.js');

module.exports = Object.freeze({
  showAll: (payload) => {
    return {
      type: actionType.SHOW_ALL,
      payload: payload
    };
  },
  showRecent: (payload) => {
    return {
      type: actionType.SHOW_RECENT,
      payload: payload
    };
  },
  showThisMonth: (payload) => {
    return {
      type: actionType.SHOW_THIS_MONTH,
      payload: payload
    };
  },
  showBetween: (payload, from, to) => {
    return {
      type: actionType.SHOW_BETWEEN,
      payload: payload,
      from: from,
      to: to
    };
  },
  orderByNew: () => {
    return {
      type: actionType.ORDER_BY_DESC
    };
  },
  orderByOld: () => {
    return {
      type: actionType.ORDER_BY_ASC
    };
  }
});
