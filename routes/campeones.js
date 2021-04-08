const express = require('express');

const router = express.Router();

const personajes = ["Ahri", "Akali", "Evelynn", "Sona"];

router.get('/nuevo-campeon', (request, response, next) => {
    response.send('<h1>Nuevo Campeon</h1><body><h1>Agrega un campeón</h1><form action="nuevo-campeon" method="POST"><input type="text" name="nombre"><input type="submit" value="Guardar campeón"></form></body>'); 
});

router.post('/nuevo-campeon', (request, response, next) => {
    console.log(request.body.nombre);
    personajes.push(request.body.nombre);
    response.redirect('/campeones');
});

router.use('/', (request, response, next) => {
    let html = '<h1>Campeones</h1><ul>';
    for (let personaje of personajes){
        html = html + '<li>' + personaje + '</li>';
    }
    html = html + '</ul>';
    response.send(html);
});

module.exports = router;