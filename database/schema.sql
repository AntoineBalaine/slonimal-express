DROP DATABASE IF EXISTS slonimal_db;
CREATE DATABASE slonimal_db;
USE slonimal_db;

CREATE TABLE slonimals (
  id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
  animal VARCHAR(255) NOT NULL,
  speed_mm_per_s DEC(5, 2)
);
