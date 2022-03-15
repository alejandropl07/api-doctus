const db = require("../models");
const user= db.users;
const Op = db.Sequelize.Op;
const bcrypt = require("bcryptjs");
// Create and Save a new Tutorial
exports.create = (req, res) => {
 
};
// Retrieve all Tutorials from the database.
exports.findAll = (req, res) => {
    user.findAll({attributes:['usercode', 'username',    'Nombre', 'levelauth'], 
    where:{usercode:{[Op.eq]:req.params.id}}})
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving."
      });
    });
  };
// Find a single Tutorial with an id
exports.findOne = async (req, res) => {
  
};
// Update a Tutorial by the id in the request
exports.updatePassword = (req, res) => {
  const {password}   =   req.body; 
  const usercode  = req.params.id;

  db.sequelize.query(`UPDATE users SET users.password  = '${password}' WHERE users.usercode = '${usercode}'`)
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
};

// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {
 
};

exports.encryptPassword = async (password)  =>  {
  const salt  = await bcrypt.genSalt(10)
  return  await bcrypt.hash(password, salt)
};

exports.comparePassword = async (password,  receivedPassword)  =>  {
  return  await bcrypt.compare(password, receivedPassword)
};