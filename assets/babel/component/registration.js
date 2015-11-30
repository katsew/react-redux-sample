const React = require('react');
const ApiClient = require('./../service/api-client.js');

const Registration = React.createClass({
  onSubmit(e) {
    console.log('--- submit email ---');
    e.preventDefault();
    let data = null;
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
            <p><label>メールアドレス<input type="email" onChange={this.onChangeEmail} /></label></p>
            <input type="submit" value="送信" />
          </form>
        </div>
      </div>
    );
  }
});

module.exports = Registration;
