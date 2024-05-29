const express = require('express');
const router = express.Router();
const userRoutes = require("./user.route");
const theaterRoutes = require("./theater.route");
const movieRoutes = require("./movie.route");
const bookingRoutes = require("./booking.route");
const showRoutes = require("./show.route");

router.use('/users', userRoutes);
router.use('/theaters', theaterRoutes);
router.use('/movies', movieRoutes);
router.use('/bookings', bookingRoutes);
router.use('/shows', showRoutes);

module.exports = router;