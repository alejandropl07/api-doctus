module.exports = app => {
    const estudiantes = require("../controllers/estudiantesController.js");
    var router = require("express").Router();
    // Create a new Tutorial
    router.post("/", estudiantes.create);
    // Retrieve all Tutorials
    router.get("/", estudiantes.findAll);
    // Retrieve all published Tutorials
    router.get("/published", estudiantes.findAllPublished);
    // Retrieve a single Tutorial with id
    router.get("/:id", estudiantes.findOne);
    // Update a Tutorial with id
    router.put("/:id", estudiantes.update);
    // Delete a Tutorial with id
    router.delete("/:id", estudiantes.delete);
    // Delete all Tutorials
    router.delete("/", estudiantes.deleteAll);
    app.use('/api/estudiantes', router);
  };