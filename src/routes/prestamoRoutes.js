module.exports = app => {
    const prestamo = require("../controllers/prestamoController.js");
    const verifyToken = require("../middleware");
    var router = require("express").Router();
    // Create a new Tutorial
    router.post("/" , prestamo.create);
    // Retrieve all Tutorials
    router.get("/:id", verifyToken, prestamo.findAll);
    // Retrieve all published Tutorials
    router.get("/published", prestamo.findAllPublished);
    // Retrieve a single Tutorial with id
    router.get("/:id", prestamo.findOne);
    // Update a Tutorial with id
    router.put("/:id", prestamo.update);
    // Delete a Tutorial with id
    router.delete("/:codBar", verifyToken, prestamo.delete);
    // Delete all Tutorials
    router.delete("/", prestamo.deleteAll);
    // Buscar libros por codigo de barra
    router.get("/books/codBar", prestamo.findBooks);
    app.use('/api/prestamo', router);
  };