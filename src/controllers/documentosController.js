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


//Utilizacion de documentos
exports.utilizacionDocs = async (req, res) => {
    if(req.body.checkAll){
        console.log("Todos");
        const results   =  await sequelize.query (`SELECT Count(EstadPrestamo.IDLibro) AS Cantidad FROM EstadPrestamo Where (Year([FechaEntrega]))='${req.body.anno}'`)
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
    else {
        const results   =  await sequelize.query (`SELECT Count(EstadPrestamo.IDLibro) AS Cantidad FROM EstadPrestamo LEFT JOIN libros ON
        EstadPrestamo.IDLibro = libros.IDLibro WHERE (((libros.CodDomicilio)='${req.body.codDom}')
        AND ((Year([FechaEntrega]))='${req.body.anno}'))`)
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


//Numero de documentos
exports.numeroDeDocs = async (req, res) => {
    var documentos  =   [];
    //Total de ejemplares
    documentos.push(await sequelize.query (`Select count(*) As CantTotalE From Ejemplares`))
    /*.then(([results, metadata]) => {
        res.send(results);
        console.log(results);
        })
        .catch(err => {
        res.status(500).send({
        message:
        err.message || "Ha ocurrido un error."
        });
        });*/

    //Sala A Ejemplares
    documentos.push(await sequelize.query (`Select count(*) As CSalaA From Ejemplares Where Ubicacion='Sala A'`))

    //Sala B Ejemplares
    documentos.push(await sequelize.query (`Select count(*) As CSalaB From Ejemplares Where Ubicacion='Sala B'`))

    //Sala D Ejemplares
    documentos.push(await sequelize.query (`Select count(*) As CSalaD From Ejemplares Where Ubicacion='Sala D'`))

    //Sala E Ejemplares
    documentos.push(await sequelize.query (`Select count(*) As CSalaE From Ejemplares Where Ubicacion='Sala E'`))

    //Sala F Ejemplares
    documentos.push(await sequelize.query (`Select count(*) As CSalaF From Ejemplares Where Ubicacion='Sala F'`))

    //Sala G Ejemplares
    documentos.push(await sequelize.query (`Select count(*) As CSalaG From Ejemplares Where Ubicacion='Sala G'`))

    //Almacen Ejemplares
    documentos.push(await sequelize.query (`Select count(*) As CAlmacen From Ejemplares Where Ubicacion='Almacén'`))

    //Referencia Ejemplares
    documentos.push(await sequelize.query (`Select count(*) As CRef From Ejemplares Where Ubicacion='Referencia'`))

    //Restauracion Ejemplares
    documentos.push(await sequelize.query (`Select count(*) As CRest From Ejemplares Where Ubicacion='Restauración'`))

        //Total de libros
        documentos.push(await sequelize.query (`Select count(*) As CantTotal From Libros`))

        //Sala A Titulos
        documentos.push(await sequelize.query (`SELECT Count(distinct IdLibro) As CSalaA from ejemplares WHERE ubicacion ='Sala A'`))

        //Sala B Titulos
        documentos.push(await sequelize.query (`SELECT Count(distinct IdLibro) As CSalaB from ejemplares WHERE ubicacion ='Sala B'`))
    
        //Sala D Titulos
        documentos.push(await sequelize.query (`SELECT Count(distinct IdLibro) As CSalaD from ejemplares WHERE ubicacion ='Sala D'`))
    
        //Sala E Titulos
        documentos.push(await sequelize.query (`SELECT Count(distinct IdLibro) As CSalaF from ejemplares WHERE ubicacion ='Sala E'`))
    
        //Sala F Titulos
        documentos.push(await sequelize.query (`SELECT Count(distinct IdLibro) As CSalaF from ejemplares WHERE ubicacion ='Sala F'`))
    
        //Sala G Titulos
        documentos.push(await sequelize.query (`SELECT Count(distinct IdLibro) As CSalaG from ejemplares WHERE ubicacion ='Sala G'`))
    
        //Almacen Titulos
        documentos.push(await sequelize.query (`SELECT Count(distinct IdLibro) As CAlmacen from ejemplares WHERE ubicacion ='Almacén'`))
    
        //Referencia Titulos
        documentos.push(await sequelize.query (`SELECT Count(distinct IdLibro) As CRef from ejemplares WHERE ubicacion ='Referencia'`))
    
        //Restauracion Titulos
        documentos.push(await sequelize.query (`SELECT Count(distinct IdLibro) As CRest from ejemplares WHERE ubicacion ='Restauración'`))
    
        if(documentos.length !== 0){
            res.send(documentos);
            }
            else {
            res.status(500).send({
            message:
            err.message || "Ha ocurrido un error."
            });
            };

        const doc0 = documentos[0];
        const doc1 = documentos[1];
        const doc2 = documentos[2];
        const doc3 = documentos[3];
        const doc4 = documentos[4];
        const doc5 = documentos[5];
        const doc6 = documentos[6];
    console.log(doc0[0]);
    console.log(doc1[0]);
    console.log(doc2[0]);
    console.log(doc3[0]);
    console.log(doc4[0]);
    console.log(doc5[0]);
    console.log(doc6[0]);
    };


//Numero de documentos
exports.sinFoliado = async (req, res) => {
    var docsSinFoliado  =   [];
    //Total de ejemplares sin foliado
    docsSinFoliado.push(await sequelize.query (`select count(idEjemplar) AS CantTotalE From Ejemplares
    Where IdEjemplar Not In(Select IdEjemplar From
    Ejemplares Where (subdivision1 like '%Fol%') Or (subdivision2 like '%Fol%'))`))
   
    //Código L Titulos
    docsSinFoliado.push(await sequelize.query (`Select Count(IdLibro) AS CantCodL From Libros
    Where CodDomicilio Like 'L%'`))

    //Código L Ejemplares
    docsSinFoliado.push(await sequelize.query (`select count(idEjemplar) AS CantCodL,count(idlibro) From Ejemplares
    Where (IdEjemplar Not In(Select IdEjemplar From
    Ejemplares Where (subdivision1 like '%Fol%') Or
    (subdivision2 like '%Fol%')) And
    IdLibro in (Select idlibro from libros where coddomicilio like 'L%'))`))

    //Código F Titulos
    docsSinFoliado.push(await sequelize.query (`Select Count(IdLibro) AS CantCodF From Libros
    Where (CodDomicilio Like 'F%') And (IdLibro Not in (Select idlibro where coddomicilio like 'Fol%'))`))

    //Código F Ejemplares
    docsSinFoliado.push(await sequelize.query (`select count(idEjemplar) AS CantCodF,count(idlibro) From Ejemplares
    Where (IdEjemplar Not In(Select IdEjemplar From
    Ejemplares Where (subdivision1 like '%Fol%') Or
    (subdivision2 like '%Fol%')) And
    IdLibro in (Select idlibro from libros where coddomicilio like 'F%'))`))

    //Código S Titulos
    docsSinFoliado.push(await sequelize.query (`Select Count(IdLibro) AS CantCodS From Libros
    Where CodDomicilio Like 'S%'`))

    //Código S Ejemplares
    docsSinFoliado.push(await sequelize.query (`select count(idEjemplar) AS CantCodS,count(idlibro) From Ejemplares
    Where (IdEjemplar Not In(Select IdEjemplar From
    Ejemplares Where (subdivision1 like '%Fol%') Or
    (subdivision2 like '%Fol%')) And
    IdLibro in (Select idlibro from libros where coddomicilio like 'S%'))`))

    //Código E Titulos
    docsSinFoliado.push(await sequelize.query (`Select Count(IdLibro) AS CantCodE From Libros
    Where CodDomicilio Like 'E%'`))

    //Código E Ejemplares
    docsSinFoliado.push(await sequelize.query (`select count(idEjemplar) AS CantCodE,count(idlibro) From Ejemplares
    Where (IdEjemplar Not In(Select IdEjemplar From
    Ejemplares Where (subdivision1 like '%Fol%') Or
    (subdivision2 like '%Fol%')) And
    IdLibro in (Select idlibro from libros where coddomicilio like 'E%'))`))

        //Total de libros sin foliado
        docsSinFoliado.push(await sequelize.query (`select count(idlibro) AS CantTotal from libros
        Where idlibro not in(select idlibro from libros where (coddomicilio like '%Fol%'))`))

        if(docsSinFoliado.length !== 0){
        res.send(docsSinFoliado);
        }
        else {
        res.status(500).send({
        message:
        err.message || "Ha ocurrido un error."
        });
        };
          
        const doc0 = docsSinFoliado[0];
        const doc1 = docsSinFoliado[1];
        const doc2 = docsSinFoliado[2];
        const doc3 = docsSinFoliado[3];
        const doc4 = docsSinFoliado[4];
        const doc5 = docsSinFoliado[5];
        const doc6 = docsSinFoliado[6];
    console.log(doc0[0]);
    console.log(doc1[0]);
    console.log(doc2[0]);
    console.log(doc3[0]);
    console.log(doc4[0]);
    console.log(doc5[0]);
    console.log(doc6[0]);
};