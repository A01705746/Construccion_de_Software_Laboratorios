const express = require('express');

const router = express.Router();

const path = require('path');

const campeonesController = require('../controllers/campeones_controller');

const personajes = ["Ahri", "Akali", "Evelynn", "Sona"];
const nuevos_personajes = [];

router.get('/nuevo-campeon', (request, response, next) => {
    response.render('nuevo-campeon', {
        titulo: 'Nuevo Campeón'
    });
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

router.use('/', campeonesController.get);

module.exports = router;