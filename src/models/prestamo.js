module.exports = (sequelize, Sequelize) => {
    const Prestamo = sequelize.define("prestamo", {
      CodBarras: {
        type: Sequelize.STRING
      },
      CI: {
        type: Sequelize.STRING
      },
      FechaEntrega: {
        type: Sequelize.DATE
      },
      FechaDevolucion: {
        type:   Sequelize.DATE
      },
      CodeUser: {
        type:   Sequelize.INTEGER
      },
      Analizado: {
        type:   Sequelize.INTEGER
      },
      type_user: {
        type:   Sequelize.STRING
      },
      condicion: {
        type:   Sequelize.STRING
      },
      anno: {
        type:   Sequelize.INTEGER
      }
    });
    return Prestamo;
  };