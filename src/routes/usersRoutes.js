module.exports = app => {
    const users = require("../controllers/usersController.js");
    var router = require("express").Router();
    // Retrieve all Tutorials
    router.get("/:id", users.findAll);
    // Retrieve a single Tutorial with id
    router.get("/:id", users.findOne);
    // Update a Tutorial with id
    router.put("/:id", users.updatePassword);
    // Delete a Tutorial with id
    router.delete("/:id", users.delete);
    app.use('/api/users', router);
  };