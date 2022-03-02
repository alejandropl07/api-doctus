module.exports = (sequelize, Sequelize) => {
    const Documentos = sequelize.define("documentos", {
      IDLibro: {
        type: Sequelize.NUMBER
      },
      CodBarras: {
        type: Sequelize.STRING
      },
      NoEjemplar: {
        type: Sequelize.NUMBER
      },
      Subdivision1: {
        type:   Sequelize.STRING
      },
      Subdivision2: {
        type:   Sequelize.STRING
      },
      NoIngreso: {
        type:   Sequelize.STRING
      },
      FechaIngreso: {
        type:   Sequelize.STRING
      },
      Ubicacion: {
        type:   Sequelize.STRING
      },
      ViasAdq: {
        type:   Sequelize.STRING
      },
      Procedencia: {
        type:   Sequelize.STRING
      },
      Precio: {
        type:   Sequelize.NUMBER
      },

    });
    return Documentos;
  };