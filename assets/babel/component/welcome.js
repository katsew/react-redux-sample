const React = require('react');
const ReactDOM = require('react-dom');
const find = ReactDOM.findDOMNode;
const ApiClient = require('./../service/api-client.js');
const connect = require('react-redux').connect;

const Welcome = React.createClass({
  render() {
    return (
      <div className="section">
        <div className="content">
          <h2>ようこそ！</h2>
        </div>
      </div>
    );
  }
});


module.exports = Welcome;
