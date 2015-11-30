const React = require('react');
const Link = require('react-router').Link;
const connect = require('react-redux').connect;
const ApiClient = require('./../service/api-client.js');
const actionCreator = require('../action/auth/');
const pushState = require('redux-router').pushState;
const history = require('../util/history.js');

const mapStateToProps = (state) => {
  return {
    auth: state.auth
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    successLogout: (auth) => {
      dispatch(actionCreator.successLogout());
    },
    failureLogout: (err) => {
      dispatch(actionCreator.failureLogout());
    },
    pushState: pushState
  }
};

const Header = React.createClass({
  logout(e) {
    e.preventDefault();
    ApiClient.logout((err, res) => {
      if (err != null) {
        console.log(err);
        return this.props.failureLogout();
      }
      this.props.successLogout();
      history.pushState(null, "/");
    });
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
            {
              this.props.auth.isAuth ?
              <li><a href="/" onClick={this.logout}>ログアウト</a></li> :
              <li><Link to="login">ログイン</Link></li>
            }
          </ul>
        </div>
      </div>
    );
  }
});


module.exports = connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
