const SocketClient = require('./socket-client.js');
const toJSON = JSON.stringify;
let instance = null;
class KpiClient extends SocketClient {
  constructor(host, port, gameId) {
    super(host, port);
    this.gameId = gameId;
  }
  login(user_id) {
    let data = toJSON({
      game_id: this.gameId,
      user_id: user_id,
      type: 'LOGIN'
    });
    this.socket.emit('log:login', data);
  }
};

module.exports = function(host, port, gameId) {
  if (instance != null) {
    console.log('--- prevent instantiate, this is a singleton class ---');
    return instance;
  }
  instance = new KpiClient(host, port, gameId);
  return instance;
};
