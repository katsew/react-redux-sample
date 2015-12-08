const React = require('react');
const ApiClient = require('./../service/api-client.js');
const ReactDOM = require('react-dom');
const find = ReactDOM.findDOMNode;
const KpiClient = require('./../service/kpi-client.js')('sample');
const actionCreator = require('../action/auth/');
const connect = require('react-redux').connect;
const pushState = require('redux-router').pushState;
const storage = window.localStorage;
const Registration = React.createClass({
  onSubmit(e) {
    console.log('--- submit email ---');
    e.preventDefault();
    let name = find(this.refs.registar_name).value;
    let mail = find(this.refs.registar_mail).value;
    let password = find(this.refs.registar_password).value;
    let confirm = find(this.refs.registar_confirm).value;
    let data = {
      name: name,
      mail: mail,
      password: password,
      confirm: confirm
    };
    ApiClient.registar(data, (err, res) => {
      if (res.status > 200) {
        console.log('--- registar failed ---');
        return this.props.failureLogin();
      }
      console.log('--- kpi registar and login ---');
      KpiClient.registar(res.data._id, res.token);
      storage.setItem("token", res.token);
      KpiClient.login(res.data.id, res.token);
      this.props.successLogin();
      this.props.history.pushState(null, "/welcome");
    });
  },
  render() {
    return (
      <div className="section">
        <div className="content">
          <h2>新規登録</h2>
          <form onSubmit={this.onSubmit}>
            <p><label>ユーザー名<input type="text" ref="registar_name" /></label></p>
            <p><label>メールアドレス<input type="email" ref="registar_mail" /></label></p>
            <p><label>パスワード<input type="password" ref="registar_password" /></label></p>
            <p><label>パスワード確認<input type="password" ref="registar_confirm" /></label></p>
            <input type="submit" value="送信" />
          </form>
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

module.exports = connect(
  mapStateToProps,
  mapDispatchToProps
)(Registration);
