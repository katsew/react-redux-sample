const React = require('react');
const Link = require('react-router').Link;
const connect = require('react-redux').connect;
const ApiClient = require('./../../service/api-client.js');
const constants = require('../../constant/');

const Dashboard = React.createClass({
  componentWillMount() {
    console.log(this.props.params.gameId);
    ApiClient.getTypeList(this.props.params.gameId, window.localStorage.getItem(constants.TOKEN_KEY), (err, res) => {
      console.log('--- verify GET request ---');
      console.error(err);
      console.log(res);
      if (err != null)
        return false;
      return true;
    });
  },
  render() {
    return (
      <div>
        {this.props.params.gameId}
      </div>
    );
  }
});

module.exports = connect(

)(Dashboard);
