const React = require('react');
const Link = require('react-router').Link;
const connect = require('react-redux').connect;
const ApiClient = require('../service/api-client.js');
const constants = require('../constant/');
const actionCreator = require('../action/typelist');

const mapStateToProps = (state) => {
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
    let gameId = this.props.params.gameId;
    ApiClient.getTypeList(gameId, window.localStorage.getItem(constants.TOKEN_KEY), (err, res) => {
      if (err != null)
        return this.props.failureFetch();
      return this.props.successFetch({[gameId]: res.data});
    });
  },
  render() {
    let gameId = this.props.params.gameId;
    let typeList = this.props.typeList;
    let types = [];
    if (gameId && (Object.keys(typeList).length > 0 && typeList[gameId])) {
      types = typeList[gameId].map((item, idx, arr) => {
        return (
          <div key={idx}>
            <Link to={`/dashboard/${this.props.params.gameId}/${item}`}>{item}</Link>
          </div>
        );
      });
    }
    return (
      <div>
        {gameId}
        <div>
          {types}
        </div>
      </div>
    );
  }
});

module.exports = connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);
