const React = require('react');
const ApiClient = require('./../service/api-client.js');

const Login = React.createClass({
  getInitialState() {
    return {
      mail: "",
      password: ""
    };
  },
  onChangeEmail(e) {
    console.log('--- email changed ---');
    console.log(e);
    let st = this.state;
    let next = Object.assign({}, st, { mail: e.target.value });
    this.setState(next);
  },
  onChangePassword(e) {
    console.log('--- password changed ---');
    console.log(e);
    let st = this.state;
    let next = Object.assign({}, st, { password: e.target.value });
    this.setState(next);
  },
  onSubmit(e) {
    console.log('--- submit email ---');
    console.log(e);
    console.log(this.state);
    let data = this.state;
    ApiClient.login(data, (err, res) => {
      console.log('--- response comes here ---');
      console.log(err);
      console.log(res);
    });
  },
  render() {
    return (
      <div>
        <h2>ログイン</h2>
        <form onSubmit={this.onSubmit}>
          <label>メールアドレス</label>
          <input type="email" onChange={this.onChangeEmail} value={this.state.mail} />
          <label>パスワード</label>
          <input type="password" onChange={this.onChangePassword} />
          <input type="submit" value="送信" />
        </form>
      </div>
    );
  }
});

module.exports = Login;
