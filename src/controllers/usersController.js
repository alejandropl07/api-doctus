const db = require("../models");
const user= db.users;
const Op = db.Sequelize.Op;
const bcrypt = require("bcryptjs");

exports.findAll = async (req, res) => {
    await user.findAll({attributes:['usercode', 'username',    'Nombre', 'levelauth'], 
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
  const id = req.params.id;
  await user.findByPk(id)
  .then(data => {
    res.send(data);
  })
  .catch(err => {
    res.status(500).send({
      message: "Error retrieving User with id=" + id
    });
  });
};
// Update a Tutorial by the id in the request
exports.updatePassword = async (req, res) => {
  const {password}   =   req.body; 
  const username  = req.params.id;

  await db.sequelize.query(`UPDATE users SET users.password  = '${await this.encryptPassword (password)}' WHERE users.username LIKE '${username}'`)
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
  const username  = req.params.id;

  db.sequelize.query(`DELETE users WHERE users.username LIKE '${username}'`)
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

exports.encryptPassword = async (password)  =>  {
  const salt  = await bcrypt.genSalt(10)
  return  await bcrypt.hash(password, salt)
};

exports.comparePassword = async (receivedPassword, password )  =>  {
  return  await bcrypt.compare(receivedPassword, password )
};