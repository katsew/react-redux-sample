const actionType = require('../action/statics-filter/action-type.js');
const _ = require('lodash');
const moment = require('moment');
const initialState = {
  x: [],
  y: []
};

const staticFilter = (state = initialState, action) => {
  switch(action.type) {
    case actionType.SHOW_ANYWAY: {
      console.log(action.payload);
      return action.payload;
    }
    break;
    case actionType.SHOW_ALL: {
      return _.sortBy(action.payload, (item, idx, arr) => {
        let time = moment(item.created).valueOf();
        return Math.min(-time);
      });
    }
    break;
    case actionType.SHOW_RECENT: {
      console.log('--- show last 30 days filter ---');
      let recentDate = moment().add(-30, 'days').format('YYYY-MM-DD');
      let data = _.filter(action.payload, (item) => {
        return moment(item.created).isAfter(recentDate);
      });
      return _.sortBy(data, (item, idx, arr) => {
        let time = moment(item.created).valueOf();
        return Math.min(-time);
      });
    }
    break;
    case actionType.SHOW_THIS_MONTH: {
      console.log('--- show this month filter ---');
      let startOf = moment().startOf('month').format('YYYY-MM-DD hh:mm:ss');
      let endOf = moment().endOf('month').format('YYYY-MM-DD hh:mm:ss');
      let start = moment(startOf).add(-12, 'hours').toDate();
      let end = moment(endOf).add(12, 'hours').toDate();
      let data = _.filter(action.payload, (item) => {
        return moment(item.created).isBetween(start, end);
      });
      return _.sortBy(data, (item, idx, arr) => {
        let time = moment(item.created).valueOf();
        return Math.min(-time);
      });
    }
    break;
    case actionType.SHOW_BETWEEN: {
      let from = moment(action.from).format('YYYY-MM-DD');
      let to = moment(action.to).format('YYYY-MM-DD');
      let data = _.filter(action.payload, (item) => {
        let created = moment(item.created).format('YYYY-MM-DD');
        return moment(created).isBetween(from, to);
      });
      return _.sortBy(data, (item, idx, arr) => {
        let time = moment(item.created).valueOf();
        return Math.min(-time);
      });
    }
    break;
    case actionType.ORDER_BY_ASC: {
      return _.sortBy(state, (item, idx, arr) => {
        let time = moment(item.created).valueOf();
        return Math.min(time);
      });
    }
    break;
    case actionType.ORDER_BY_DESC: {
      return _.sortBy(state, (item, idx, arr) => {
        let time = moment(item.created).valueOf();
        return Math.min(-time);
      });
    }
    case actionType.FORCE_RESET: {
      return initialState;
    }
    break;
    default:
      return state;
  }
};

module.exports = staticFilter;
