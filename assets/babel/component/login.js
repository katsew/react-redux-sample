const React = require('react');
const ReactDOM = require('react-dom');
const find = ReactDOM.findDOMNode;
const ApiClient = require('./../service/api-client.js');
const actionCreator = require('../action/auth/');
const connect = require('react-redux').connect;
const pushState = require('redux-router').pushState;

const mapStateToProps = (state) => {
  return {
    auth: state.auth
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    successLogin: (auth) => {
      dispatch(actionCreator.successLogin());
    },
    failureLogin: (err) => {
      dispatch(actionCreator.failureLogin());
    },
    pushState: pushState
  }
};

const Login = React.createClass({
  onSubmit(e) {
    e.preventDefault();
    let mail = find(this.refs.login_mail).value;
    let password = find(this.refs.login_password).value;
    let data = {
      mail: mail,
      password: password
    };
    ApiClient.login(data, (err, res) => {
      if (err != null) {
        console.log(err);
        return this.props.failureLogin();
      }
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
            <p><label>メールアドレス<input type="email" ref="login_mail" /></label></p>
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
