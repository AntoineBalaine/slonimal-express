// Set up an Express server in this file
// Use body-parser (for JSON) and morgan (for development)

const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const router = require('./routes.js');

// Assign an instance of Express to a variable for easy use
const app = express();
const port = 3000;

// This is how middleware is added in Express
app.use(bodyParser.json());
app.use(morgan('dev'));

// Router is another type of middleware, and we tell Express to use it for '/' routes
app.use('/', router);

// Start the server
app.listen(port, console.log(`Listening on ${port}`));
