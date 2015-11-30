const React = require('react');
const Header = require('./header.js');
const connect = require('react-redux').connect;
const pushState = require('redux-router').pushState;

const App = React.createClass({
  render() {
    return (
      <div className="app-inner">
        <Header />
        {this.props.children}
      </div>
    );
  }
});

const mapStateToProps = (state) => {
  return {
    q: state.router.location.query.q
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    pushState: pushState
  };
};

module.exports = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
