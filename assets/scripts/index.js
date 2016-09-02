'use strict';

const authEvents = require('./auth/events');

// On document ready
$(() => {
  const circular = require('./circular/index'); // fuggetaboutit
  authEvents.addHandlers();
