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
  sendRegistrationEmail(data, callback) {
    httpClient
      .post(`${API_ENDPOINT}/m/c`)
      .send(data)
      .end((err, res) => {
        console.error(err);
        console.log(res);
        callback(err, parse(res.text));
      });
  }
  login(data, callback) {
    httpClient
      .post(`${API_ENDPOINT}/login`)
      .send(data)
      .end((err, res) => {
        console.error(err);
        console.log(res);
        callback(err, parse(res.text));
      });
  }
  logout(callback) {
    httpClient
      .get(`${API_ENDPOINT}/logout`)
      .send()
      .end((err, res) => {
        console.error(err);
        console.log(res);
        callback(err, parse(res.text));
      });
  }
  checkAuth(callback) {
    httpClient
      .get(`${API_ENDPOINT}/check_auth`)
      .send()
      .end((err, res) => {
        console.error(err);
        console.log(res);
        callback(err, parse(res.text));
      });
  }
};

module.exports = new ApiClient();
