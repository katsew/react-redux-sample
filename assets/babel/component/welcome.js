const React = require('react');
const ReactDOM = require('react-dom');
const find = ReactDOM.findDOMNode;
const ApiClient = require('./../service/api-client.js');
const connect = require('react-redux').connect;
const constants = require('../constant/');

const Welcome = React.createClass({
  getVerification() {
    ApiClient.checkToken(window.localStorage.getItem(constants.TOKEN_KEY), (err, res) => {
      console.log('--- verify GET request ---');
      console.error(err);
      console.log(res);
    });
  },
  render() {
    return (
      <div className="section">
        <div className="content">
          <h2>ようこそ！</h2>
          <button className="button" onClick={this.getVerification}>GET verify token</button>
        </div>
      </div>
    );
  }
});

const mapStateToProps = (state) => {
  return {
    auth: state.auth
  };
};

module.exports = connect(
  mapStateToProps
)(Welcome);
