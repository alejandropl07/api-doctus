module.exports = app => {
    const estadPrestamo = require("../controllers/estadPrestamoController.js");
    var router = require("express").Router();
    // Create a new Tutorial
    router.post("/", estadPrestamo.create);
    // Retrieve all Tutorials
    router.get("/:id", estadPrestamo.findAll);
    // Retrieve all published Tutorials
    router.get("/published", estadPrestamo.findAllPublished);
    // Retrieve a single Tutorial with id
    router.get("/:id", estadPrestamo.findOne);
    // Update a Tutorial with id
    router.put("/:id", estadPrestamo.update);
    // Delete a Tutorial with id
    router.delete("/:id", estadPrestamo.delete);
    // Delete all Tutorials
    router.delete("/", estadPrestamo.deleteAll);
    app.use('/api/estadPrestamo', router);
  };