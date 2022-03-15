module.exports = app => {
    const auth = require("../controllers/authController.js");
    var router = require("express").Router();
    // SIGNUP
    router.post("/signup", auth.signup);

    // SIGNIN
    router.post("/signin", auth.signin);
    
    app.use('/api/auth', router);
  };