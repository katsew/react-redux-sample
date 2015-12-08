"use strict";

const httpClient = require("superagent");
const API_VERSION = "v1";
const HOST = "localhost";
const PORT = "3000";
const parse = JSON.parse;
const API_ENDPOINT = `http://${HOST}:${PORT}/api/${API_VERSION}`;

class ApiClient {
  constructor() {
  }
  registar(data, callback) {
    httpClient
      .post(`${API_ENDPOINT}/user/create`)
      .send(data)
      .end((err, res) => {
        console.log(err);
        console.log(res);
        callback(err, parse(res.text));
      });
  }
  login(data, callback) {
    httpClient
      .post(`${API_ENDPOINT}/auth/login`)
      .send(data)
      .end((err, res) => {
        console.log(err);
        console.log(res);
        callback(err, parse(res.text));
      });
  }
  logout(callback) {
    httpClient
      .get(`${API_ENDPOINT}/auth/logout`)
      .send()
      .end((err, res) => {
        console.log(err);
        console.log(res);
        callback(err, parse(res.text));
      });
  }
  checkToken(token, callback) {
    httpClient
      .get(`${API_ENDPOINT}/auth/check_token`)
      .set('x-access-token', token)
      .end((err, res) => {
        console.log(err);
        console.log(res);
        callback(err, parse(res.text));
      });
  }
  getOwner(token, callback) {
    httpClient
      .get(`${API_ENDPOINT}/user/owner`)
      .set('x-access-token', token)
      .end((err, res) => {
        console.log(err);
        console.log(res);
        callback(err, parse(res.text));
      });
  }
};

module.exports = new ApiClient();
