const mysql = require('mysql');
const db = mysql.createConnection({
  host: 'localhost',
  user: '', // Add your user name
  password: '', // Add your password
  database: 'slonimal_db'
});

module.exports = db;