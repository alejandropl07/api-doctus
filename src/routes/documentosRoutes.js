module.exports = app => {
    const documentos = require("../controllers/documentosController.js");
    var router = require("express").Router();
    // Create a new Tutorial
    router.post("/", documentos.create);
    // Retrieve all Tutorials
 /*   router.get("/", documentos.findAll);
    // Retrieve a single Tutorial with id
    router.get("/:id", documentos.findOne);
    // Documentos mas demandados*/
    router.get("/docMasDem", documentos.docMasDemandados);
    // Update a Tutorial with id
    router.put("/:id", documentos.update);
    // Delete a Tutorial with id
    router.delete("/:id", documentos.delete);
    // Delete all Tutorials
    router.delete("/", documentos.deleteAll);
    app.use('/api/documentos', router);
  };