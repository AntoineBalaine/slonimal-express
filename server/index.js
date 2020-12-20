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

// Router is another type of middleware, and here we tell Express to use it for '/' routes
// (Since we're just using '/' here, we could omit the first argument)
// This will act as the base route for anything going through 'router'
// If, for instance, you use '/api' instead of just '/', all the routes 'router' uses will start with '/api'
app.use('/', router);

// Start the server
app.listen(port, console.log(`Listening on ${port}`));
