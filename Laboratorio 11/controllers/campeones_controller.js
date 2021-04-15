const personajes = ["Ahri", "Akali", "Evelynn", "Sona"];
const nuevos_personajes = [];

exports.get = (request, response, next) => {
    response.render('campeones', {
        lista_personajes: personajes,
        titulo: 'Campeones'
    });
};