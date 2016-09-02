'use strict';

const c = require('./c');

const b = function () {
  console.log('I am in b, and here is c: ', c);
};

module.exports = b;
