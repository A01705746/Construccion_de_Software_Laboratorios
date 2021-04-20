const express = require('express');

const router = express.Router();

const path = require('path');

const campeonesController = require('../controllers/campeones_controller');

router.get('/nuevo-campeon', campeonesController.getNuevoCampeon);

router.post('/nuevo-campeon', campeonesController.postNuevoCampeon);

router.get('/:campeon_id', campeonesController.getCampeon);

router.use('/', campeonesController.get);

module.exports = router;