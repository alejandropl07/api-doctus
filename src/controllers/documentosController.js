const { sequelize } = require("../models");
const db = require("../models");
const documento = db.documentos;
const Op = db.Sequelize.Op;
// Create and Save a new Tutorial
exports.create = (req, res) => {
  
};
// Retrieve all Tutorials from the database.
exports.findAll = (req, res) => {
   
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
//Buscar los 20 documentos mas demandados por mes y año
exports.docMasDemandados = async (req, res) => {
    if(req.body.anno === "" && req.body.mes === ""){
        console.log("Año y mes");
        const results   =  await sequelize.query (`SELECT libros.IDLibro, Count(EstadPrestamo.IDLibro) AS Prestamos FROM EstadPrestamo INNER JOIN libros ON EstadPrestamo.IDLibro = libros.IDLibro GROUP BY libros.IDLibro ORDER BY Count(EstadPrestamo.IDLibro) DESC`)
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
    else if(req.body.mes === ""){
        console.log("Mes");
        const results   =  await sequelize.query (`SELECT libros.IDLibro, Count(EstadPrestamo.IDLibro) AS Prestamos FROM EstadPrestamo INNER JOIN libros ON EstadPrestamo.IDLibro = libros.IDLibro WHERE (YEAR(EstadPrestamo.FechaEntrega)= '${req.body.anno}') GROUP BY libros.IDLibro ORDER BY Count(EstadPrestamo.IDLibro) DESC`)
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
    else{
    const results   =  await sequelize.query (`SELECT libros.IDLibro, Count(EstadPrestamo.IDLibro) AS Prestamos FROM EstadPrestamo INNER JOIN libros ON EstadPrestamo.IDLibro = libros.IDLibro WHERE (YEAR(EstadPrestamo.FechaEntrega)= '${req.body.anno}') AND (Month(FechaEntrega) LIKE '${req.body.mes}') GROUP BY libros.IDLibro ORDER BY Count(EstadPrestamo.IDLibro) DESC`)
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