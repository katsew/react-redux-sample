const React = require('react');
const Link = require('react-router').Link;
const connect = require('react-redux').connect;

const mapStateToProps = (state) => {
  return {
    gameList: state.gameList
  };
};

const GameList = React.createClass({
  render() {
    console.log(this.props.gameList);
    let games = this.props.gameList.map((item) => {
      return (
        <div key={item.name} className="game-list-item">
          <Link to={`/dashboard/${item.name}`}>{item.name}</Link>
        </div>
      );
    });
    return (
      <div>
        {games}
      </div>
    );
  }
});

module.exports = connect(
  mapStateToProps
)(GameList);
