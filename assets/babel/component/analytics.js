const React = require('react');
const Link = require('react-router').Link;
const connect = require('react-redux').connect;
const ApiClient = require('../service/api-client.js');
const constants = require('../constant/');
const actionCreator = require('../action/analytics');
const staticsFilter = require('../action/statics-filter');
const moment = require('moment');
const _ = require('lodash');

const BarChart = require('react-d3/barchart').BarChart;

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
      dispatch(staticsFilter.show(data));
    },
    failureFetch: () => {
      dispatch(actionCreator.failureFetch());
      dispatch(staticsFilter.forceReset());
    }
  }
};
const Analytics = React.createClass({
  componentWillMount() {
    console.log('--- analytics component up ---');
    console.log(`${this.props.params.gameId}:${this.props.params.typeId}`);
    let token = window.localStorage.getItem(constants.TOKEN_KEY);
    let recentDate = moment().add(-30, 'days').format('YYYY-MM-DD');
    let today = moment().format('YYYY-MM-DD');
    let accessDate = `${recentDate}:${today}`;
    console.log('--- accessDate last 30 days ---');
    console.log(accessDate);
    let accessName = `${this.props.params.gameId}:${this.props.params.typeId}`;
    ApiClient.getAnalytics(accessName, accessDate, token, (err, res) => {
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
  getValidAnalytics() {
    console.log('--- get valid analytics ---');
    let analytics = this.props.analytics;
    let gameId = this.props.params.gameId;
    let typeId = this.props.params.typeId;
    console.log(analytics, gameId, typeId);

    if ( gameId && typeId && (Object.keys(analytics).length > 0 && analytics[gameId]) && Object.keys(analytics[gameId][typeId]).length > 0 ) {
      console.log('--- data is valid ! ---');
      return analytics[gameId][typeId];
    }
  },
  render() {
    console.log('--- render component ---');
    let chartY = [];
    let chartX = [];
    let barChart = [{
      "name": "New Registration",
      "values": []
    }];
    if (_.isObject(this.getValidAnalytics())) {
      console.log('--- is valid statics ---');
      console.log(this.props.statics);
      chartX = _.map(this.props.statics.x, (item, idx, arr) => {
        return (
          <g key={idx}>
            <text x={idx*20} y={10} fill="black" transform={`rotate(90, ${idx*20+6}, 6)`}>
            {item}
            </text>
          </g>
        );
      });
      chartY = _.map(this.props.statics.y, (item, idx, arr) => {
        return (
          <rect
            key={idx}
            fill="lightblue"
            width="10"
            height={item * 10}
            y={400 - item * 10}
            x={idx*20}
          />
        );
      });
      let staticsY = this.props.statics.y;
      _.map(this.props.statics.x, (item, idx, arr) => {
        barChart[0].values.push({
          "x": item,
          "y": staticsY[idx]
        });
      });
    }

    return (
      <div className="section">
        <div className="content">
          {this.props.params.typeId}
          <BarChart
            data={barChart}
            width={960}
            height={480}
            fill={'#3182bd'}
            title={this.props.typeId}
            yAxisLabel="Accesses"
            xAxisLabel="Last 30 Days"
            xAxisFormatter={(d) => {
              let startOfMonth = moment(d).startOf('month').format('YYYY-MM-DD');
              console.log(startOfMonth);
              console.log(moment(d).isSame(startOfMonth, 'day'));
              if (moment(d).isSame(startOfMonth, 'day'))
                return moment(d).format('MM/DD')
              return moment(d).format('DD');
            }}
            yAxisTickCount={6}
          />
        </div>
      </div>
    );
  }
});

module.exports = connect(
  mapStateToProps,
  mapDispatchToProps
)(Analytics);

// <div>
//   <svg width="800" height="400" className="chart-y">
//     <g>
//       {chartY}
//     </g>
//   </svg>
//   <svg width="800" height="100" className="chart-x">
//     <g>
//       {chartX}
//     </g>
//   </svg>
// </div>
