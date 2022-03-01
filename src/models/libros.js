module.exports = (sequelize, Sequelize) => {
    const Libros = sequelize.define("libros", {
      Titulo: {
        type: Sequelize.STRING
      },
      Entrada: {
        type: Sequelize.STRING
      },
      TipoAut: {
        type: Sequelize.STRING
      },
      Autor: {
        type:   Sequelize.STRING
      },
      OtrosAutores: {
        type:   Sequelize.STRING
      },
      Edicion: {
        type:   Sequelize.STRING
      },
      Serie: {
        type:   Sequelize.STRING
      },
      Notas: {
        type:   Sequelize.STRING
      },
      AnnoPub: {
        type:   Sequelize.NUMBER
      },
      MencionResp: {
        type:   Sequelize.STRING
      },
      CodDomicilio: {
        type:   Sequelize.STRING
      },
      ISBN: {
        type:   Sequelize.STRING
      },
      Dewey: {
        type:   Sequelize.STRING
      },
      Evento: {
        type:   Sequelize.STRING
      },
      OtrosEventos: {
        type:   Sequelize.STRING
      },
      Publicacion: {
        type:   Sequelize.STRING
      },
      Colacion: {
        type:   Sequelize.STRING
      },
      Materias: {
        type:   Sequelize.STRING
      },
      OtrosTitulos: {
        type:   Sequelize.STRING
      },
      Folleto: {
        type:   Sequelize.STRING
      },
      Referencia: {
        type:   Sequelize.STRING
      },
      LetrasEnt: {
        type:   Sequelize.STRING
      },
      LetraTitulo: {
        type:   Sequelize.STRING
      },
      Clasif: {
        type:   Sequelize.STRING
      },
      Idioma: {
        type:   Sequelize.STRING
      },
      Pais: {
        type:   Sequelize.STRING
      },
      TimeStamp: {
        type:   Sequelize.NUMBER
      }
    });
    return Libros;
  };