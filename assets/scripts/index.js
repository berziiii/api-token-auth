'use strict';

const authEvents = require('./auth/events.js');

// On document ready
<<<<<<< Updated upstream
$(() => {
  authEvents.addHandlers();
});
=======
$(window.setTimeout(() => {
  const circular = require('./circular/index'); // fuggetaboutit
  authEvents.addHandlers();
}, 0));
>>>>>>> Stashed changes
