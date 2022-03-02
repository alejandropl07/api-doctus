module.exports = (sequelize, Sequelize) => {
    const EstadPrestamo = sequelize.define("estadPrestamo", {
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
      TipoPrestamo: {
        type:   Sequelize.INTEGER
      },
      Categoria: {
        type:   Sequelize.STRING
      },
      IDLibro: {
        type:   Sequelize.NUMBER
      },
      Facultad: {
        type:   Sequelize.STRING
      }
    });
    return EstadPrestamo;
  };