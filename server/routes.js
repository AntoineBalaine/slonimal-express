// Configure routes here
const controller = require('./controller.js');
const express = require('express');
const router = express.Router(); // Instantiate a router

// Specify which controller methods correspond to which HTTP requests
router
  .route('/')
  .get(controller.getAll)
  .post(controller.addNew);

router
  .route('/super')
  .get(controller.getSuper);

module.exports = router; // Make the router accessible elsewhere
