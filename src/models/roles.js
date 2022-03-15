module.exports = (sequelize, Sequelize) => {
    const Roles = sequelize.define("roles", {
      Name: {
        type: Sequelize.STRING
      }});
    return roles;
  };