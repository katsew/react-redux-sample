"use strict";

const socket = require('socket.io-client');
class SocketClient {
  constructor(host, port) {
    this.socket = socket(`http://${host}:${port}`);
  }
  on(type, cb) {
    console.log('event listening', type);
    this.socket.on(type, cb);
  }
  emit(event, data) {
    console.log('emit event:', event);
    this.socket.emit(event, data);
  }
  close() {
    try {
      this.socket.disconnect();
    } catch (e) {
      console.log('--- failed to close connection ---');
      console.log(e);
    }
  }
  reopen() {
    try {
      this.socket.reconnect();
    } catch (e) {
      console.log('--- failed to open new connection ---');
      console.log(e);
    }
  }
};

module.exports = SocketClient;
