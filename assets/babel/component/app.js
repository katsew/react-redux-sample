const React = require('react');
const Header = require('./header.js');

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

module.exports = App;
