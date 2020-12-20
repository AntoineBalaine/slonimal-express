const model = require('../database/models.js');

const controller = {
  // Write your controller methods here
  getAll: (req, res) => {
    model.getAll((err, result) => {
      if (err) { res.status(400).send(err) }
      res.status(200).send(result);
    });
  },

  addNew: (req, res) => {
    // Sometimes HTTP requests like POST need access to the request body
    model.addNew(req.body.animal, req.body.speed_mm_per_s, (err, result) => {
      if (err) { res.status(400).send(err) }
      res.status(200).send(result);
    });
  },

  getSuper: (req, res) => {
    model.getSuper((err, result) => {
      if (err) { res.status(400).send(err) }
      res.status(200).send(result);
    });
  }
};

module.exports = controller;
