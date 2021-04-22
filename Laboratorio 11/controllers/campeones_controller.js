const Campeon = require('../models/campeon');

exports.getNuevoCampeon = (request, response, next) => {
    response.render('nuevo-campeon', {
        titulo: 'Nuevo Campeón',
        csrfToken: request.csrfToken(),
        isLoggedIn: request.session.isLoggedIn === true ? true : false
    });
};

exports.postNuevoCampeon = (request, response, next) => {
    console.log("Creando nuevo personaje...");
    console.log(request.body.nombre_campeon);

    const image = request.file;
    console.log(image);

    if(!image) {
        console.error('Error al subir imagen');
        return response.status(422).redirect('/');
    }

    const nuevo_campeon = new Campeon(request.body.nombre_campeon, image.filename);
    
    nuevo_campeon.save()
        .then(() => {
            response.setHeader('Set-Cookie', ['ultimo_campeon='+ nuevo_campeon.nombre + '; HttpOnly']);
            response.redirect('/campeones');
        })
        .catch(err => {
            console.log(err);
        });
};

exports.getCampeon = (request, response, next) => {
    const id = request.params.campeon_id;
    Campeon.fetchOne(id)
        .then(([rows, fieldData]) => {
            console.log(rows);
            response.render('campeones', {
                lista_personajes: rows,
                titulo: 'Campeones',
                isLoggedIn: request.session.isLoggedIn === true ? true : false
            });
        })
        .catch(err => {
            console.log(err);
        });

};

exports.get = (request, response, next) => {

    console.log('Cookie: ' + request.get('Cookie'));
    console.log(request.get('Cookie').split(';')[1].trim().split('=')[1]);

    // Con cookie-parser
    console.log(request.cookies);
    console.log(request.cookies.ultimo_campeon);
    
    Campeon.fetchAll()
        .then(([rows, fieldData]) => {
            console.log(rows);
            response.render('campeones', {
                lista_personajes: rows,
                titulo: 'Campeones',
                isLoggedIn: request.session.isLoggedIn === true ? true : false
            });
        })
        .catch(err => {
            console.log(err);
        });

};