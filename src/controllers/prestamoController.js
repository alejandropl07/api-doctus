const { sequelize } = require("../models");
const db = require("../models");
const prestamo= db.prestamo;
const Op = db.Sequelize.Op;
// Create and Save a new Tutorial
exports.create = (req, res) => {
 
};
// Retrieve all Tutorials from the database.
exports.findAll = (req, res) => {
    prestamo.findAll({attributes:['CodBarras', 'CI',    'FechaEntrega', 'FechaDevolucion',  'condicion'], 
    where:{CI:{[Op.eq]:req.params.id}}})
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
// Find a single Prestamo with an id
exports.findOne = async (req, res) => {
    
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

//Busca en libros y ejemplares por un codigo de barra
exports.findBooks = (req, res) => {
  sequelize.query("SELECT libros.id, libros.Titulo, libros.Autor, ejemplares.CodBarras FROM libros INNER JOIN ejemplares ON libros.id = ejemplares.IDLibro WHERE ejemplares.CodBarras= '101136'")
  .then(([results, metadata]) => {
    res.send(results);
  })
  .catch(err => {
  res.status(500).send({
    message:
      err.message || "Some error occurred while retrieving."
  });
});  
};
