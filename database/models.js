const db = require('./');

const models = {
  getAll: (callback) => {
    const queryStr = 'SELECT * FROM slonimals';
    db.query(queryStr, (err, result) => {
      callback(err, result);
    });
  },

  addNew: (animal, speed, callback) => {
    const queryStr = `INSERT INTO slonimals (animal, speed_mm_per_s) VALUES ('${animal}', ${speed})`;
    db.query(queryStr, (err, result) => {
      callback(err, result);
    })
  },

  getSuper: (callback) => {
    const queryStr = 'SELECT * FROM slonimals';
    db.query(queryStr, (err, result) => {
      const superResult = result.map((el) => ({
        animal: `Super ${el.animal}`,
        speed_mm_per_s: el.speed_mm_per_s * 100.0
      }));
      callback(err, superResult);
    });
  }
};

module.exports = models;
