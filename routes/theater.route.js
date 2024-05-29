const express = require('express');
const { createTheater, createHallAndSeats } = require('../controllers/theater.controller');
const router = express.Router();

router.post('/create-theater', createTheater);
router.post('/create-hall-seats', createHallAndSeats);

module.exports = router;