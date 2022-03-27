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
    if(req.query.anno === '' && req.query.mes === ''){
        await sequelize.query (`SELECT TOP 20 libros.IDLibro, Count(EstadPrestamo.IDLibro) AS Prestamos FROM EstadPrestamo INNER JOIN libros ON EstadPrestamo.IDLibro = libros.IDLibro GROUP BY libros.IDLibro ORDER BY Count(EstadPrestamo.IDLibro) DESC`)
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
    else if(req.query.mes === ''){
        console.log("Mes");
        console.log(req.query.anno);
        await sequelize.query (`SELECT TOP 20 libros.IDLibro, Count(EstadPrestamo.IDLibro) AS Prestamos FROM EstadPrestamo INNER JOIN libros ON EstadPrestamo.IDLibro = libros.IDLibro WHERE (YEAR(EstadPrestamo.FechaEntrega)= '${req.query.anno}') GROUP BY libros.IDLibro ORDER BY Count(EstadPrestamo.IDLibro) DESC`)
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
    await sequelize.query (`SELECT TOP 20 libros.IDLibro, Count(EstadPrestamo.IDLibro) AS Prestamos FROM EstadPrestamo INNER JOIN libros ON EstadPrestamo.IDLibro = libros.IDLibro WHERE (YEAR(EstadPrestamo.FechaEntrega)= '${req.query.anno}') AND (Month(FechaEntrega) LIKE '${req.query.mes}') GROUP BY libros.IDLibro ORDER BY Count(EstadPrestamo.IDLibro) DESC`)
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
    if(req.query.checkAll){
        console.log("Todos");
        await sequelize.query (`SELECT Count(EstadPrestamo.IDLibro) AS Cantidad FROM EstadPrestamo Where (Year([FechaEntrega]))='${req.query.anno}'`)
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
        await sequelize.query (`SELECT Count(EstadPrestamo.IDLibro) AS Cantidad FROM EstadPrestamo LEFT JOIN libros ON
        EstadPrestamo.IDLibro = libros.IDLibro WHERE (((libros.CodDomicilio)='${req.query.codDom}')
        AND ((Year([FechaEntrega]))='${req.query.anno}'))`)
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
    var documentosFinal  =   [];
    //Total de ejemplares
    await sequelize.query (`Select count(*) As CantTotalE From Ejemplares`)
    .then(([results, metadata]) => {
        documentos.push(results);
        })
        .catch(err => {
        res.status(500).send({
        message:
        err.message || "Ha ocurrido un error."
        });
        });

    //Sala A Ejemplares
    await sequelize.query (`Select count(*) As CSalaA From Ejemplares Where Ubicacion='Sala A'`)
    .then(([results, metadata]) => {
        documentos.push(results);
        })
        .catch(err => {
        res.status(500).send({
        message:
        err.message || "Ha ocurrido un error."
        });
        });

    //Sala B Ejemplares
    await sequelize.query (`Select count(*) As CSalaB From Ejemplares Where Ubicacion='Sala B'`)
    .then(([results, metadata]) => {
        documentos.push(results);
    })
        .catch(err => {
        res.status(500).send({
        message:
        err.message || "Ha ocurrido un error."
        });
        });

    //Sala D Ejemplares
    await sequelize.query (`Select count(*) As CSalaD From Ejemplares Where Ubicacion='Sala D'`)
    .then(([results, metadata]) => {
        documentos.push(results);
            })
            .catch(err => {
            res.status(500).send({
            message:
            err.message || "Ha ocurrido un error."
            });
            });

    //Sala E Ejemplares
    await sequelize.query (`Select count(*) As CSalaE From Ejemplares Where Ubicacion='Sala E'`)
    .then(([results, metadata]) => {
        documentos.push(results);
    })
        .catch(err => {
        res.status(500).send({
        message:
        err.message || "Ha ocurrido un error."
        });
        });

    //Sala F Ejemplares
    await sequelize.query (`Select count(*) As CSalaF From Ejemplares Where Ubicacion='Sala F'`)
    .then(([results, metadata]) => {
        documentos.push(results);
        })
        .catch(err => {
        res.status(500).send({
        message:
        err.message || "Ha ocurrido un error."
        });
        });

    //Sala G Ejemplares
    await sequelize.query (`Select count(*) As CSalaG From Ejemplares Where Ubicacion='Sala G'`)
    .then(([results, metadata]) => {
        documentos.push(results);
        })
        .catch(err => {
        res.status(500).send({
        message:
        err.message || "Ha ocurrido un error."
        });
        });

    //Almacen Ejemplares
    await sequelize.query (`Select count(*) As CAlmacen From Ejemplares Where Ubicacion='Almacén'`)
    .then(([results, metadata]) => {
        documentos.push(results);
        })
        .catch(err => {
        res.status(500).send({
        message:
        err.message || "Ha ocurrido un error."
        });
        });

    //Referencia Ejemplares
    await sequelize.query (`Select count(*) As CRef From Ejemplares Where Ubicacion='Referencia'`)
    .then(([results, metadata]) => {
        documentos.push(results);
        })
        .catch(err => {
        res.status(500).send({
        message:
        err.message || "Ha ocurrido un error."
        });
        });

    //Restauracion Ejemplares
    await sequelize.query (`Select count(*) As CRest From Ejemplares Where Ubicacion='Restauración'`)
    .then(([results, metadata]) => {
        documentos.push(results);
        })
        .catch(err => {
        res.status(500).send({
        message:
        err.message || "Ha ocurrido un error."
        });
        });

        //Total de libros
        await sequelize.query (`Select count(*) As CantTotal From Libros`)
        .then(([results, metadata]) => {
            documentos.push(results);
            })
            .catch(err => {
            res.status(500).send({
            message:
            err.message || "Ha ocurrido un error."
            });
            });

        //Sala A Titulos
        await sequelize.query (`SELECT Count(distinct IdLibro) As CSalaA from ejemplares WHERE ubicacion ='Sala A'`)
        .then(([results, metadata]) => {
            documentos.push(results);
            })
            .catch(err => {
            res.status(500).send({
            message:
            err.message || "Ha ocurrido un error."
            });
            });

        //Sala B Titulos
        await sequelize.query (`SELECT Count(distinct IdLibro) As CSalaB from ejemplares WHERE ubicacion ='Sala B'`)
        .then(([results, metadata]) => {
            documentos.push(results);
            })
            .catch(err => {
            res.status(500).send({
            message:
            err.message || "Ha ocurrido un error."
            });
            });
    
        //Sala D Titulos
        await sequelize.query (`SELECT Count(distinct IdLibro) As CSalaD from ejemplares WHERE ubicacion ='Sala D'`)
        .then(([results, metadata]) => {
            documentos.push(results);
            })
            .catch(err => {
            res.status(500).send({
            message:
            err.message || "Ha ocurrido un error."
            });
            });
    
        //Sala E Titulos
        await sequelize.query (`SELECT Count(distinct IdLibro) As CSalaF from ejemplares WHERE ubicacion ='Sala E'`)
        .then(([results, metadata]) => {
            documentos.push(results);
            })
            .catch(err => {
            res.status(500).send({
            message:
            err.message || "Ha ocurrido un error."
            });
            });
    
        //Sala F Titulos
        await sequelize.query (`SELECT Count(distinct IdLibro) As CSalaF from ejemplares WHERE ubicacion ='Sala F'`)
        .then(([results, metadata]) => {
            documentos.push(results);
            })
            .catch(err => {
            res.status(500).send({
            message:
            err.message || "Ha ocurrido un error."
            });
            });
    
        //Sala G Titulos
        await sequelize.query (`SELECT Count(distinct IdLibro) As CSalaG from ejemplares WHERE ubicacion ='Sala G'`)
        .then(([results, metadata]) => {
            documentos.push(results);
            })
            .catch(err => {
            res.status(500).send({
            message:
            err.message || "Ha ocurrido un error."
            });
            });
    
        //Almacen Titulos
        await sequelize.query (`SELECT Count(distinct IdLibro) As CAlmacen from ejemplares WHERE ubicacion ='Almacén'`)
        .then(([results, metadata]) => {
            documentos.push(results);
            })
            .catch(err => {
            res.status(500).send({
            message:
            err.message || "Ha ocurrido un error."
            });
            });
    
        //Referencia Titulos
        await sequelize.query (`SELECT Count(distinct IdLibro) As CRef from ejemplares WHERE ubicacion ='Referencia'`)
        .then(([results, metadata]) => {
            documentos.push(results);
            })
            .catch(err => {
            res.status(500).send({
            message:
            err.message || "Ha ocurrido un error."
            });
            });
    
        //Restauracion Titulos
        await sequelize.query (`SELECT Count(distinct IdLibro) As CRest from ejemplares WHERE ubicacion ='Restauración'`)
        .then(([results, metadata]) => {
            documentos.push(results);
            })
            .catch(err => {
            res.status(500).send({
            message:
            err.message || "Ha ocurrido un error."
            });
            });
    
        
        documentosFinal.push(documentos[0][0]);
        documentosFinal.push(documentos[1][0]);
        documentosFinal.push(documentos[2][0]);
        documentosFinal.push(documentos[3][0]);
        documentosFinal.push(documentos[4][0]);
        documentosFinal.push(documentos[5][0]);
        documentosFinal.push(documentos[6][0]);
        documentosFinal.push(documentos[7][0]);
        documentosFinal.push(documentos[8][0]);
        documentosFinal.push(documentos[9][0]);
        documentosFinal.push(documentos[10][0]);
        documentosFinal.push(documentos[11][0]);
        documentosFinal.push(documentos[12][0]);
        documentosFinal.push(documentos[13][0]);
        documentosFinal.push(documentos[14][0]);
        documentosFinal.push(documentos[15][0]);
        documentosFinal.push(documentos[16][0]);
        documentosFinal.push(documentos[17][0]);
        documentosFinal.push(documentos[18][0]);
        documentosFinal.push(documentos[19][0]);

        if(documentos.length !== 0){
            res.send(documentosFinal);
            }
            else {
            res.status(500).send({
            message:
            err.message || "Ha ocurrido un error."
            });
            };
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