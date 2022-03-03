module.exports = (sequelize, Sequelize) => {
    const Sancionados = sequelize.define("sancionados", {
      CI: {
        type: Sequelize.STRING
      },
      FechaInicio: {
        type: Sequelize.DATE
      },
      FechaFin: {
        type:   Sequelize.DATE
      },
      Motivo: {
        type:   Sequelize.STRING
      },
      Observaciones: {
        type:   Sequelize.STRING
      }
    });
    return Sancionados;
  };