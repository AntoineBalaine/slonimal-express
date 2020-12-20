const mysql = require('mysql');
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'mysql',
  database: 'slonimal_db'
});

module.exports = db;