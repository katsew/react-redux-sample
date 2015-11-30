const React = require('react');
const Link = require('react-router').Link;

const Header = React.createClass({
  componentDidMount() {
    console.log('--- header is mounted ---');
  },
  render() {
    return (
      <div className="header clearfix">
        <div className="header-inner">
          <h1 className="logo l-left">
            <Link to="/">site logo</Link>
          </h1>
          <ul className="navi l-right clearfix">
            <li><Link to="registar">新規登録</Link></li>
            <li><Link to="login">ログイン</Link></li>
          </ul>
        </div>
      </div>
    );
  }
});

module.exports = Header;
