'use strict';

const a = require('./a');

const c = function () {
  console.log('I am in c, and here is a: ', a);
};

module.exports = c;
