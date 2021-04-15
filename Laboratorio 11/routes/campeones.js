const express = require('express');

const router = express.Router();

const path = require('path');

const personajes = ["Ahri", "Akali", "Evelynn", "Sona"];
const nuevos_personajes = [];

router.get('/nuevo-campeon', (request, response, next) => {
    response.send('<h1>Nuevo Campeon</h1><body><h1>Agrega un campeón</h1><form action="nuevo-campeon" method="POST"><input type="text" name="nombre_campeon"><input type="submit" value="Guardar campeón"></form></body>'); 
});

router.post('/nuevo-campeon', (request, response, next) => {
    console.log(request.body.nombre_campeon);
    personajes.push(request.body.nombre_campeon);
    nuevos_personajes.push(request.body.nombre_campeon);

    console.log("Campeones guardados en Nuevos Campeones.txt");
    const filesystem = require('fs');
    filesystem.writeFileSync('Nuevos Campeones.txt', nuevos_personajes.toString());

    response.redirect('/campeones');
});

router.use('/', (request, response, next) => {
    response.render('campeones', {
        lista_personajes: personajes,
        titulo: 'Campeones'
    });
});

module.exports = router;