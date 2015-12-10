const React = require('react');
const Link = require('react-router').Link;
const connect = require('react-redux').connect;
const ApiClient = require('../service/api-client.js');
const constants = require('../constant/');
const actionCreator = require('../action/typelist');

const mapStateToProps = (state) => {
  console.log(state);
  return {
    analytics: state.analytics
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    successFetch: (payload) => {
      dispatch(actionCreator.successFetch(payload));
    },
    failureFetch: () => {
      dispatch(actionCreator.failureFetch());
    }
  }
};
const Analytics = React.createClass({
  componentWillMount() {
    // TBD
  },
  render() {
    return (
      <div>
        {this.props.params.typeId}
      </div>
    );
  }
});

module.exports = connect(
  mapStateToProps,
  mapDispatchToProps
)(Analytics);
