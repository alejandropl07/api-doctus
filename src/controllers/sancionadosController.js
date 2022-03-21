const db = require("../models");
const { sequelize } = require("../models");
const sancionado= db.sancionados;
const Op = db.Sequelize.Op;
// Create and Save a new Tutorial
exports.create = (req, res) => {
  const {ci, fechaInicio, fechaFin, motivo, observaciones}   =   req.body; 

  sequelize.query(`INSERT INTO sancionados (sancionados.CI, sancionados.FechaInicio, sancionados.FechaFin, sancionados.Motivo, sancionados.Observaciones) VALUES ('${ci}', '${fechaInicio}', '${fechaFin}', '${motivo}', '${observaciones}')`)
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
// Retrieve all Tutorials from the database.
exports.findAll = (req, res) => {
    sancionado.findAll({attributes:['CI',    'FechaInicio', 'FechaFin',  'Motivo'], 
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
// Find a single Tutorial with an id
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