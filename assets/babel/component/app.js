const React = require('react');
const Header = require('./header.js');
const connect = require('react-redux').connect;
const bindActionCreators = require('redux').bindActionCreators;
const actionCreator = require('../action/login/action-creator.js');
const pushState = require('redux-router').pushState;

let App = React.createClass({
  componentDidMount() {
  },
  render() {
    console.log('--- app is mounted ---');
    console.log(this.displayName);
    console.log(this.props.dispatch);
    return (
      <div className="app-inner">
        <Header />
        {this.props.children}
      </div>
    );
  }
});

module.exports = connect(
  state => ({ q: state.router.location.query.q }),
  { pushState }
)(App);
