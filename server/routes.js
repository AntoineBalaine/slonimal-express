const controller = require('./controller.js');
const express = require('express');
const router = express.Router(); // Instantiate a router

router
  // .route() is how you specify which route uses these methods
  // All requests going to 'localhost:3000/' will use these
  .route('/')
  .get(controller.getAll)
  .post(controller.addNew);

router
  // All requests going to 'localhost:3000/super' will use these methods
  .route('/super')
  .get(controller.getSuper);

module.exports = router; // Make the router accessible elsewhere
