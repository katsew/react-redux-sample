const React = require('react');
const ReactDOM = require('react-dom');
const find = ReactDOM.findDOMNode;
const ApiClient = require('./../service/api-client.js');
const actionCreator = require('../action/auth/');
const connect = require('react-redux').connect;
const Login = require('./login.js');
const pushState = require('redux-router').pushState;
const constants = require('../constant/');

const Auth = (Component) => {
  const Authenticated = React.createClass({
    componentWillMount() {
      this._authenticate();
    },
    componentWillReceiveProps (nextProps) {
      this._authenticate();
    },
    _authenticate() {
      console.log('--- check whether auth is required ---');
      if (!this.props.auth.isAuth) {
        console.log('--- auth is required! ---');
        ApiClient.checkToken(window.localStorage.getItem(constants.TOKEN_KEY), (err, res) => {
          if (err != null) {
            console.log(err);
            return this.props.pushState(null, '/login');
          }
          this.props.pushState(null, '/welcome');
        });
        return ;
      }
      console.log('--- user already login, goto welcome ---');
      this.props.pushState(null, '/welcome');
    },
    render() {
      return (
        <div>
          { this.props.auth.isAuth ?
            <Component {...this.props} /> :
            <Login {...this.props} />
          }
        </div>
      );
    }
  });
  const mapStateToProps = (state) => {
    return {
      auth: state.auth
    };
  };

  const mapDispatchToProps = (dispatch) => {
    return {
      successLogin: () => {
        dispatch(actionCreator.successLogin());
      },
      failureLogin: (err) => {
        dispatch(actionCreator.failureLogin());
      },
      pushState: pushState
    }
  };

  return connect(mapStateToProps, mapDispatchToProps)(Authenticated);
}

module.exports = Auth;
