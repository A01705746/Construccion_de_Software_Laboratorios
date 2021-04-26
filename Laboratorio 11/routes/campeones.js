const express = require('express');

const isAuth = require('../util/is-auth');

const router = express.Router();

const path = require('path');

const campeonesController = require('../controllers/campeones_controller');

router.get('/nuevo-campeon', isAuth, campeonesController.getNuevoCampeon);

router.post('/nuevo-campeon', isAuth, campeonesController.postNuevoCampeon);

router.get('/:campeon_id', isAuth, campeonesController.getCampeon);

router.post('/buscar', isAuth, campeonesController.postBuscar)

router.use('/', isAuth, campeonesController.get);

module.exports = router;