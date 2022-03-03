module.exports = app => {
    const sancionados = require("../controllers/sancionadosController.js");
    var router = require("express").Router();
    // Create a new Tutorial
    router.post("/", sancionados.create);
    // Retrieve all Tutorials
    router.get("/:id", sancionados.findAll);
    // Retrieve all published Tutorials
    router.get("/published", sancionados.findAllPublished);
    // Retrieve a single Tutorial with id
    router.get("/:id", sancionados.findOne);
    // Update a Tutorial with id
    router.put("/:id", sancionados.update);
    // Delete a Tutorial with id
    router.delete("/:id", sancionados.delete);
    // Delete all Tutorials
    router.delete("/", sancionados.deleteAll);
    app.use('/api/sancionados', router);
  };