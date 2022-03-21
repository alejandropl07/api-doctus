const {sequelize} = require("../models");
const db = require("../models");
const estadPrestamo = db.estadPrestamo;
const Op = db.Sequelize.Op;
// Create and Save a new Tutorial
exports.create = (req, res) => {
  
};
// Retrieve all Tutorials from the database.
exports.findAll = (req, res) => {
    estadPrestamo.findAll({attributes:['CI',    'FechaEntrega', 'FechaDevolucion',  'Categoria',    'Facultad'], 
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
exports.prestamoPorUsuario = async (req, res) => {
  if(req.body.tipoUsuario === "Todos" ){
    console.log("TODOS");
    const results   =  await sequelize.query (`SELECT EstadPrestamo.Facultad, Month(FechaEntrega) AS Mes, Count(EstadPrestamo.Facultad) AS Cantidad FROM EstadPrestamo
      WHERE (Year(FechaEntrega)='${req.body.anno}') 
      GROUP BY EstadPrestamo.Facultad, Month(FechaEntrega)
      HAVING (((EstadPrestamo.Facultad) Not like '')) ORDER BY EstadPrestamo.Facultad`)
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
}
else if(req.body.tipoUsuario === "Estudiante"){
    console.log("ESTUDIANTES");
    const results   =  await sequelize.query (`SELECT EstadPrestamo.Facultad, Month(FechaEntrega) AS Mes,
     Count(EstadPrestamo.Facultad) AS Cantidad FROM EstadPrestamo
      WHERE (((Year(FechaEntrega))='${req.body.anno}') AND ((EstadPrestamo.Categoria) like 'ESTUDIANTE'))
      GROUP BY EstadPrestamo.Facultad, Month(FechaEntrega)
      HAVING (((EstadPrestamo.Facultad) Not like '')) ORDER BY EstadPrestamo.Facultad`)
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
}
else if(req.body.tipoUsuario === "Docente"){
const results   =  await sequelize.query (`SELECT EstadPrestamo.Facultad, Month(FechaEntrega) AS Mes,
 Count(EstadPrestamo.Facultad) AS Cantidad FROM EstadPrestamo
   WHERE (((Year(FechaEntrega))='${req.body.anno}') AND ((EstadPrestamo.Categoria) like 'Docente'))
   GROUP BY EstadPrestamo.Facultad, Month(FechaEntrega)
   HAVING (((EstadPrestamo.Facultad) Not like '')) ORDER BY EstadPrestamo.Facultad`)
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
}

else if(req.body.tipoUsuario === "No Docente"){
  const results   =  await sequelize.query (`SELECT EstadPrestamo.Facultad, Month(FechaEntrega) AS Mes,
   Count(EstadPrestamo.Facultad) AS Cantidad FROM EstadPrestamo
     WHERE (((Year(FechaEntrega))='${req.body.anno}') AND ((EstadPrestamo.Categoria) like 'No Docente'))
     GROUP BY EstadPrestamo.Facultad, Month(FechaEntrega)
     HAVING (((EstadPrestamo.Facultad) Not like '')) ORDER BY EstadPrestamo.Facultad`)
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
  }
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