const serialize = escape;
const stringify = JSON.stringify;
const toSerializeJSON = function(data){
  let json = data;
  json = stringify(json);
  json = serialize(json);
  return json;
};
const httpClient = require("superagent");
const HOST = "localhost";
const PORT = "3333";
const API_ENDPOINT = `http://${HOST}:${PORT}/log`;
let instance = null;
class KpiClient {
  constructor(gameId) {
    this.gameId = gameId;
  }
  login(user_id, token) {
    let data = toSerializeJSON({
      game_id: this.gameId,
      user_id: user_id
    });
    console.log(data);
    httpClient
      .get(`${API_ENDPOINT}/login`)
      .set('x-access-token', token)
      .set('x-log-client', data)
      .end();
  }
  registar(user_id, token) {
    let data = toSerializeJSON({
      game_id: this.gameId,
      user_id: user_id
    });
    console.log('--- registration kpi ---');
    console.log(data);
    httpClient
      .get(`${API_ENDPOINT}/registar`)
      .set('x-access-token', token)
      .set('x-log-client', data)
      .end();
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
