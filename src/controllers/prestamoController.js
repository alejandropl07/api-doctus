const { sequelize } = require("../models");
const db = require("../models");
const prestamo= db.prestamo;
const Op = db.Sequelize.Op;
// Create and Save a new Tutorial
exports.create = (req, res) => {
  const {codBarras, ci, fechaEntrega, fechaDevolucion, codeUser, analizado, typeUser, condicion, anno}   =   req.body; 

  sequelize.query(`INSERT INTO prestamo (prestamo.CodBarras, prestamo.CI, prestamo.FechaEntrega, prestamo.FechaDevolucion, prestamo.CodeUser, prestamo.Analizado, prestamo.type_user, prestamo.condicion, prestamo.anno) VALUES ('${codBarras}', '${ci}', '${fechaEntrega}', '${fechaDevolucion}', '${codeUser}', '${analizado}', '${typeUser}', '${condicion}', '${anno}')`)
  .then(([results, metadata]) => {
  res.send(results);
  console.log(results);
  })
  .catch(err => {
  res.status(500).send({
  message:
    err.message || "Ha ocurrido un error."
  });
  });
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
exports.findOne = async (req, res) => {
  const ci = req.params.ci;
  const codBar = req.params.codBar;

  await sequelize.query (`SELECT  TOP 1 prestamo.CodBarras, prestamo.CI, prestamo.FechaEntrega, prestamo.FechaDevolucion from prestamo
  WHERE CodBarras LIKE ${codBar} AND CI LIKE ${ci} `)
      .then(([results, metadata]) => {
          res.send(results);
          console.log(results);
          })
          .catch(err => {
          res.status(500).send({
          message:
          err.message || "Ha ocurrido un error."
          });
          });
};
// Update a Tutorial by the id in the request
exports.update = (req, res) => {
 
};

// ELIMINAR PRESTAMO POR UN CODIGO DE BARRAS
exports.delete = async (req, res) => {
  const codBar = req.params.codBar;
  await sequelize.query (`DELETE  FROM prestamo WHERE CodBarras LIKE  ${codBar}`)
      .then(([results, metadata]) => {
          res.send(results);
          })
          .catch(err => {
          res.status(500).send({
          message:
          err.message || "Ha ocurrido un error."
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
