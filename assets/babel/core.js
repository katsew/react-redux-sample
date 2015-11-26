"use strict";

const $ = require('jquery');
const ApiClient = require('./service/api-client.js');

$(() => {
  $('#sendPreregistration').on('click', (e) => {
    e.preventDefault();
    let data = $('#newRegistration').serialize();
    ApiClient.sendRegistrationEmail(data, (err, res) => {
      console.log('--- response comes here ---');
      console.log(err);
      console.log(res);
    });
  });

  $('#sendLoginData').on('click', (e) => {
    e.preventDefault();
    let data = $('#login').serialize();
    ApiClient.login(data, (err, res) => {
      console.log('--- response comes here ---');
      console.log(err);
      console.log(res);
    });
  });
});
