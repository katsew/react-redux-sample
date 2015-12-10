const React = require('react');
const Link = require('react-router').Link;
const connect = require('react-redux').connect;
const ApiClient = require('../service/api-client.js');
const constants = require('../constant/');
const actionCreator = require('../action/typelist');

const mapStateToProps = (state) => {
  console.log(state);
  return {
    typeList: state.typeList
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
const Dashboard = React.createClass({
  componentWillMount() {
    ApiClient.getTypeList(this.props.params.gameId, window.localStorage.getItem(constants.TOKEN_KEY), (err, res) => {
      if (err != null)
        return this.props.failureFetch();
      return this.props.successFetch(res.data);
    });
  },
  render() {
    let typeList = this.props.typeList.map((item) => {
      return (
        <div>
          <Link to={`/dashboard/${this.props.params.gameId}/${item}`} key={item}>{item}</Link>
        </div>
      );
    });
    return (
      <div>
        {this.props.params.gameId}
        <div>
          {typeList}
        </div>
      </div>
    );
  }
});

module.exports = connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);
