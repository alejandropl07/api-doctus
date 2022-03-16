const { users } = require("../models");
const {sequelize} = require("../models")
const db = require("../models");
const jwt   =   require("jsonwebtoken");
const auth = db.users;
const Op = db.Sequelize.Op;
const usersController = require("./usersController");
const config  = require("../config");

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
  
  const token = jwt.sign({id:usercode}, config.SECRET,  {
    expiresIn:86400 //24 Hours
  })

  res.json({token});

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
    const results  = await sequelize.query(`SELECT TOP 1 users.usercode, users.username, users.password, users.levelauth FROM users WHERE users.username LIKE '${req.body.username}'`)
    if(results[1] === 1){
    //res.send(results);
    const userFound = results[0];
    const matchPassword = await usersController.comparePassword(req.body.password, userFound[0].password); 
    if(matchPassword){
    const token = jwt.sign({id:userFound[0].usercode}, config.SECRET,  {
      expiresIn:86400 //24 Hours
    })
    res.json({token})
    console.log(userFound[0]);
    console.log(req.body.password);
    console.log(matchPassword);
    }
    else{
      return res.status(401).json({message:  "Contraseña incorrecta"})
    }
    }
    else{
      return res.status(400).json({message:  "Usuario no encontrado"})
    }
};