const React = require('react');
const ReactDOM = require('react-dom');
const find = ReactDOM.findDOMNode;
const ApiClient = require('./../service/api-client.js');
const actionCreator = require('../action/auth/');
const connect = require('react-redux').connect;
const pushState = require('redux-router').pushState;
const storage = window.localStorage;
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
    failureLogin: () => {
      dispatch(actionCreator.failureLogin());
    },
    pushState: pushState
  }
};

const Login = React.createClass({
  onSubmit(e) {
    e.preventDefault();
    let name = find(this.refs.login_name).value;
    let password = find(this.refs.login_password).value;
    let data = {
      name: name,
      password: password
    };
    ApiClient.login(data, (err, res) => {
      if (err != null) {
        console.log(err);
        return this.props.failureLogin();
      }
      storage.setItem("token", res.token);
      this.props.successLogin();
      this.props.history.pushState(null, "/welcome");
    });
  },
  render() {
    return (
      <div className="section">
        <div className="content">
          <h2>ログイン</h2>
          <form onSubmit={this.onSubmit}>
            <p><label>ユーザー名<input type="text" ref="login_name" /></label></p>
            <p><label>パスワード<input type="password" ref="login_password" /></label></p>
            <input type="submit" value="送信" />
          </form>
        </div>
      </div>
    );
  }
});


module.exports = connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
