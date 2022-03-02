const db = require("../models");
const documento = db.documentos;
const Op = db.Sequelize.Op;
// Create and Save a new Tutorial
exports.create = (req, res) => {
  if (!req.body.title) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }
};
// Retrieve all Tutorials from the database.
exports.findAll = (req, res) => {
    documento.findAll({})
  .then(data => {
    res.send(data);
  })
  .catch(err => {
    res.status(500).send({
      message:
        err.message || "Some error occurred while retrieving."
    });
  });
};
// Find a single Tutorial with an id
exports.findOne = async (req, res) => {
    const id = req.params.id;
    await documento.findByPk(id)
      .then(data => {
       res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving Ejemplar with id=" + id
        });
      });
};
// Update a Tutorial by the id in the request
exports.update = (req, res) => {
 
};

// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {
 
};
// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {
  
};
// Find all published Tutorials
exports.findAllPublished = (req, res) => {
  
};