const Campeon = require('../models/campeon');

exports.getNuevoCampeon = (request, response, next) => {
    response.render('nuevo-campeon', {
        titulo: 'Nuevo Campeón'
    });
};

exports.postNuevoCampeon = (request, response, next) => {
    console.log(request.body.nombre_campeon);
    const nuevo_campeon = new Campeon(request.body.nombre_campeon, request.body.imagen_campeon);
    nuevo_campeon.save();

    response.setHeader('Set-Cookie', ['ultimo_campeon='+ nuevo_campeon.nombre]);

    response.redirect('/campeones');
};

exports.get = (request, response, next) => {

    console.log('Cookie: ' + request.get('Cookie'));
    console.log(request.get('Cookie').split(';')[1].trim().split('=')[1]);

    response.render('campeones', {
        lista_personajes: Campeon.fetchAll(),
        titulo: 'Campeones'
    });
};