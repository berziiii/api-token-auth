'use strict';

const app = require('../app');

const signInSuccess = (data) => {
  app.user = data.user;
};

const success = (data) => {
  console.log(data);
};

const failure = (error) => {
  console.error(error);
};

module.exports = {
  signInSuccess,
  failure,
  success,
};
