'use strict';

const b = require('./b');

const a = function () {
  console.log('I am in a, and here is b: ', b);
};

module.exports = a;
