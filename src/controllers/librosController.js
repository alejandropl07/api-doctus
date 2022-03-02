const db = require("../models");
const libro = db.libros;
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
  libro.findAll({})
  .then(data => {
    res.send(data);
  })
  .catch(err => {
    res.status(500).send({
      message:
        err.message || "Some error occurred while retrieving books."
    });
  });
};
// Find a single Tutorial with an id
exports.findOne = async (req, res) => {
    const id = req.params.id;
    await libro.findByPk(id)
      .then(data => {
       res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving Libro with id=" + id
        });
      });
};
// Update a Tutorial by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;
  libro.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Libro was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Libro with id=${id}. Maybe Tutorial was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Libro with id=" + id
      });
    });
};

// Update a Tutorial by the id in the request
exports.updateLibro = (req, res) => {
  const id = req.params.id;
  libro.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Libro was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Libro with id=${id}. Maybe Tutorial was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Libro with id=" + id
      });
    });
};


// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;
  libro.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Libro was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Libro with id=${id}. Maybe Libro was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Libro with id=" + id
      });
    });
};
// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {
  libro.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} Books were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all books."
      });
    });
};
// Find all published Tutorials
exports.findAllPublished = (req, res) => {
  
};