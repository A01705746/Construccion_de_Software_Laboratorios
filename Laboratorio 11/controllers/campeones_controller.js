const personajes = ["Ahri", "Akali", "Evelynn", "Sona"];
const nuevos_personajes = [];

exports.getNuevoCampeon = (request, response, next) => {
    response.render('nuevo-campeon', {
        titulo: 'Nuevo Campeón'
    });
};

exports.postNuevoCampeon = (request, response, next) => {
    console.log(request.body.nombre_campeon);
    personajes.push(request.body.nombre_campeon);
    nuevos_personajes.push(request.body.nombre_campeon);

    console.log("Campeones guardados en Nuevos Campeones.txt");
    const filesystem = require('fs');
    filesystem.writeFileSync('Nuevos Campeones.txt', nuevos_personajes.toString());

    response.redirect('/campeones');
};

exports.get = (request, response, next) => {
    response.render('campeones', {
        lista_personajes: personajes,
        titulo: 'Campeones'
    });
};