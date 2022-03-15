const { users } = require("../models");
const {sequelize} = require("../models")
const db = require("../models");
const jwt   =   require("jsonwebtoken");
const auth = db.users;
const Op = db.Sequelize.Op;
const usersController = require("./usersController");

exports.signup = async  (req, res) => {
    const {usercode, username, password, Nombre, ipaddress, levelauth, rights, intBarCode}   =   req.body; 

    sequelize.query(`INSERT INTO users (users.usercode, users.username, users.password, users.Nombre, users.ipaddress, users.levelauth, users.rights, users.intBarCode) VALUES ('${usercode}', '${username}', '${await usersController.encryptPassword(password)}', '${Nombre}', '${ipaddress}', '${levelauth}', '${rights}', '${intBarCode}')`)
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

  /*  const newUser   =   new users({
        usercode,
        username,
        password : await usersController.encryptPassword(password),
        Nombre,
        ipaddress,
        levelauth,
        rights,
        intBarCode
    }
    );
    console.log(newUser);
    users.create({usercode:usercode, username: username, password: password, Nombre: Nombre, ipaddress: ipaddress, levelauth: levelauth, rights: rights, intBarCode})
    .then(data => {
    res.send(data);
  })
  .catch(err => {
    res.status(500).send({
      message:
        err.message || "Some error occurred while retrieving."
    });
  });*/
};


exports.signin = async (req, res) => {
    const userFound =   await users.findAll({attributes:['username',    'Nombre', 'levelauth'], 
    where:{ username:{[Op.like]:req.body.username},  password:{[Op.like]:req.body.password}}})
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "El usuario no existe"
      });
    });
};