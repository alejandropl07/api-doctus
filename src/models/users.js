module.exports = (sequelize, Sequelize) => {
    const Users = sequelize.define("users", {
      usercode: {
        type: Sequelize.STRING
      },
      username: {
        type: Sequelize.TEXT
      },
      password: {
        type:   Sequelize.TEXT
      },
      Nombre: {
        type: Sequelize.STRING
      },
      ipaddress: {
        type:   Sequelize.STRING
      },
      levelauth: {
        type:   Sequelize.STRING
      },
      rights: {
        type:   Sequelize.STRING
      },
      intBarCode: {
        type:   Sequelize.BOOLEAN
      }
    });

    return Users;
  };