module.exports = app => {
    const ejemplares = require("../controllers/ejemplaresController.js");
    var router = require("express").Router();
    // Create a new Tutorial
    router.post("/", ejemplares.create);
    // Retrieve all Tutorials
    router.get("/", ejemplares.findAll);
    // Retrieve all published Tutorials
    router.get("/published", ejemplares.findAllPublished);
    // Retrieve a single Tutorial with id
    router.get("/:id", ejemplares.findOne);
    // Update a Tutorial with id
    router.put("/:id", ejemplares.update);
    // Delete a Tutorial with id
    router.delete("/:id", ejemplares.delete);
    // Delete all Tutorials
    router.delete("/", ejemplares.deleteAll);
    app.use('/api/ejemplares', router);
  };