const React = require('react');
const ApiClient = require('./../service/api-client.js');

const NewRegistration = React.createClass({
  getInitialState() {
    return {
      mail: ""
    };
  },
  onChangeEmail(e) {
    console.log('--- email changed ---');
    console.log(e);
    let st = this.state;
    let next = Object.assign({}, st, { mail: e.target.value });
    this.setState(next);
  },
  onSubmit(e) {
    console.log('--- submit email ---');
    console.log(e);
    console.log(this.state);
    e.nativeEvent.preventDefault();
    let data = this.state;
    ApiClient.sendRegistrationEmail(data, (err, res) => {
      console.log('--- response comes here ---');
      console.log(err);
      console.log(res);
    });
  },
  render() {
    return (
      <div className="section">
        <div className="content">
          <h2>新規登録</h2>
          <form onSubmit={this.onSubmit}>
            <p><label>メールアドレス<input type="email" onChange={this.onChangeEmail} value={this.state.mail} /></label></p>
            <input type="submit" value="送信" />
          </form>
        </div>
      </div>
    );
  }
});

module.exports = NewRegistration;
