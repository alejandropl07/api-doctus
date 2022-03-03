module.exports = app => {
    const prestamo = require("../controllers/prestamoController.js");
    var router = require("express").Router();
    // Create a new Tutorial
    router.post("/", prestamo.create);
    // Retrieve all Tutorials
    router.get("/:id", prestamo.findAll);
    // Retrieve all published Tutorials
    router.get("/published", prestamo.findAllPublished);
    // Retrieve a single Tutorial with id
    router.get("/:id", prestamo.findOne);
    // Update a Tutorial with id
    router.put("/:id", prestamo.update);
    // Delete a Tutorial with id
    router.delete("/:id", prestamo.delete);
    // Delete all Tutorials
    router.delete("/", prestamo.deleteAll);
    app.use('/api/prestamo', router);
  };