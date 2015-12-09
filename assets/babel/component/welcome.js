const React = require('react');
const ReactDOM = require('react-dom');
const find = ReactDOM.findDOMNode;
const ApiClient = require('./../service/api-client.js');
const connect = require('react-redux').connect;
const constants = require('../constant/');
const GameList = require('./game-list');
const actionCreator = require('../action/gamelist');

const mapStateToProps = (state) => {
  return {
    auth: state.auth
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

const Welcome = React.createClass({
  getOwner() {
    ApiClient.getOwner(window.localStorage.getItem(constants.TOKEN_KEY), (err, res) => {
      console.log('--- verify GET request ---');
      console.error(err);
      console.log(res);
    });
  },
  componentWillMount() {
    console.log('--- component will up ---');
    ApiClient.getGameList(window.localStorage.getItem(constants.TOKEN_KEY), (err, res) => {
      console.log('--- verify GET request ---');
      console.error(err);
      console.log(res);
      if (err != null)
        return this.props.failureFetch();
      this.props.successFetch(res.gameList);
    });
  },
  render() {
    return (
      <div className="section">
        <div className="content">
          <h2>ようこそ！</h2>
          <button className="button" onClick={this.getOwner}>GET Owner</button>

          <div className="game-list">
            <GameList />
          </div>
        </div>
      </div>
    );
  }
});

module.exports = connect(
  mapStateToProps,
  mapDispatchToProps
)(Welcome);
