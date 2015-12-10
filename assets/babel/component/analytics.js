const React = require('react');
const Link = require('react-router').Link;
const connect = require('react-redux').connect;
const ApiClient = require('../service/api-client.js');
const constants = require('../constant/');
const actionCreator = require('../action/analytics');
const staticsFilter = require('../action/statics-filter');
const moment = require('moment');
const _ = require('lodash');

const mapStateToProps = (state) => {
  return {
    analytics: state.analytics,
    statics: state.statics
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    successFetch: (payload, data) => {
      dispatch(actionCreator.successFetch(payload));
      dispatch(staticsFilter.showAll(data));
    },
    failureFetch: () => {
      dispatch(actionCreator.failureFetch());
    },
    showThisMonth: (payload) => {
      dispatch(staticsFilter.showThisMonth(payload));
    },
    showRecent: (payload) => {
      dispatch(staticsFilter.showRecent(payload));
    },
    orderBy: (order) => {
      switch (order) {
        case "ASC":
          dispatch(staticsFilter.orderByOld());
          break;
        case "DESC":
        default:
          dispatch(staticsFilter.orderByNew());
      }
    }
  }
};
const Analytics = React.createClass({
  componentWillMount() {
    console.log('--- analytics component up ---');
    console.log(`${this.props.params.gameId}:${this.props.params.typeId}`);
    let token = window.localStorage.getItem(constants.TOKEN_KEY);
    let accessName = `${this.props.params.gameId}:${this.props.params.typeId}`;
    ApiClient.getAnalytics(accessName, token, (err, res) => {
      console.log('--- get analytics result ---');
      console.log(err, res);
      if (err != null)
        return this.props.failureFetch();
      let payload = {
        [this.props.params.gameId]: {
          [this.props.params.typeId]: res.data
        }
      };
      console.log(payload);
      this.props.successFetch(payload, res.data);
    });
  },
  showRecent() {
    let payload = this.getValidAnalytics();
    if (_.isArray(payload))
      this.props.showRecent(payload);
  },
  showThisMonth() {
    let payload = this.getValidAnalytics();
    if (_.isArray(payload))
      this.props.showThisMonth(payload);
  },
  getValidAnalytics() {
    let analytics = this.props.analytics;
    let gameId = this.props.params.gameId;
    let typeId = this.props.params.typeId;
    console.log(analytics, gameId, typeId);

    return (gameId && typeId && (Object.keys(analytics).length > 0 && analytics[gameId] && analytics[gameId][typeId])) || false;
  },
  orderByAsc() {
    this.props.orderBy('ASC');
  },
  orderByDesc() {
    this.props.orderBy('DESC');
  },
  render() {
    console.log('--- render component ---');

    let data = {};
    let chartX = [];
    if (_.isArray(this.getValidAnalytics())) {
      console.log('--- is valid statics ---');
      if (data != null) {
        // let last30Day = moment().add(-30, 'days').format('YYYY-MM-DD');
        //
        // chartX = _.filter(data, (item) => {
        //     let created = moment(item.created).format('YYYY-MM-DD');
        //     return moment(item.created).isAfter(last30Day);
        // });
        // chartX = _.sortBy(chartX, (item, idx, arr) => {
        //   let time = moment(item.created).valueOf();
        //   return Math.min(time);
        // });
        // let chartY = _.countBy(chartX, (item, idx, arr) => {
        //   console.log(item, idx, arr);
        //   return moment(item.created).format('YYYY-MM-DD');
        // });
        // console.log(chartY['2015-11-12']);
        // chartX = _.map(this.props.statics, (item, idx, arr) => {
        //     return (
        //       <div key={idx}>
        //         {item._id} : {moment(item.created).format('YYYY年M月D日(ddd)')}
        //       </div>
        //     );
        //   });
      }
    }
    console.log(this.props.statics);
    chartX = _.map(this.props.statics, (item, idx, arr) => {
        return (
          <div key={idx}>
            {item._id} : {moment(item.created).format('YYYY年M月D日(ddd)')}
          </div>
        );
      });
    return (
      <div>
        {this.props.params.typeId}
        <div>
          <button onClick={this.showThisMonth}>SHOW THIS MONTH</button>
          <button onClick={this.showRecent}>SHOW RECENT</button>
        </div>
        <div>
          <button onClick={this.orderByAsc}>昇順(ASC)</button>
          <button onClick={this.orderByDesc}>降順(DESC)</button>
        </div>
        <div>
          {chartX}
        </div>
      </div>
    );
  }
});

module.exports = connect(
  mapStateToProps,
  mapDispatchToProps
)(Analytics);
