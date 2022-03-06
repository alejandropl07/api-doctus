const { sequelize } = require("../models");
const db = require("../models");
const prestamo= db.prestamo;
const Op = db.Sequelize.Op;
// Create and Save a new Tutorial
exports.create = (req, res) => {
 
};
// BUSCAR PRESTAMOS POR UN CI
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
// BUSCA UN PRESTAMO POR UN CARNET Y UN CODIGO DE BARRAS
exports.findOne = (req, res) => {
  const ci = req.params.ci;
  const codBar = req.params.codBar;
  libro.findByPk(id)
    .then(data => {
     res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Prestamo with ci=" + ci
      });
    });
};
// Update a Tutorial by the id in the request
exports.update = (req, res) => {
 
};

// ELIMINAR PRESTAMO POR UN CODIGO DE BARRAS
exports.delete = (req, res) => {
  const codBar = req.params.codBar;
  prestamo.destroy({
    where: { CodBarras: codBar }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Prestamo was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Prestamo with id=${codBar}. Maybe Libro was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Libro with id=" + codBar
      });
    });
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
