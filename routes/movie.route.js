const express = require('express');
const { createCastAndCrew, createMovie } = require('../controllers/movie.controller');
const router = express.Router();

router.post('/create-cast-crew', createCastAndCrew);
router.post('/create-movie', createMovie);

module.exports = router;