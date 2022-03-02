const dbConfig = require("../../config/config.js");
const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  port: dbConfig.PORT,
  dialect: dbConfig.dialect,
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle,
  },
  dialectOptions: {
    // Observe the need for this nested `options` field for MSSQL
      options: {
        encrypt: false,
        enableArithAbort: false,
        trustServerCertificate: true
      }
    }
});
const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.libros = require("./libros.js")(sequelize, Sequelize);
db.ejemplares = require("./ejemplares.js")(sequelize, Sequelize);
db.estudiantes = require("./estudiantes.js")(sequelize, Sequelize);
module.exports = db;