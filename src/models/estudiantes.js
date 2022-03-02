module.exports = (sequelize, Sequelize) => {
    const Estudiantes = sequelize.define("estudiantes", {
      CI: {
        type: Sequelize.STRING
      },
      Nombre: {
        type: Sequelize.STRING
      },
      PApellido: {
        type: Sequelize.STRING
      },
      SApellido: {
        type:   Sequelize.STRING
      },
      Dirección: {
        type:   Sequelize.STRING
      },
      CodProvincia: {
        type:   Sequelize.NUMBER
      },
      CodMunicipio: {
        type:   Sequelize.NUMBER
      },
      CodPais: {
        type:   Sequelize.NUMBER
      },
      Sexo: {
        type:   Sequelize.STRING
      },
      CodEstClasificacion: {
        type:   Sequelize.NUMBER
      },
      CodEstSituacion: {
        type:   Sequelize.NUMBER
      },
      Foto: {
        type:   Sequelize.STRING
      },
      Teléfono: {
        type:   Sequelize.STRING
      },
      email: {
        type:   Sequelize.STRING
      },
      CodCursoTipo: {
        type:   Sequelize.NUMBER
      },
      CodEspecialidad: {
        type:   Sequelize.NUMBER
      },
      Año: {
        type:   Sequelize.NUMBER
      },
      Grupo: {
        type:   Sequelize.STRING
      },
      Consecutivo: {
        type:   Sequelize.NUMBER
      }
    });
    return Estudiantes;
  };