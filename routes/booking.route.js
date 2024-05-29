const express = require('express');
const { makeBooking, updateBookingStatus } = require('../controllers/booking.controller');
const router = express.Router();

router.post('/make-booking', makeBooking);
router.post('/update-booking-status', updateBookingStatus);

module.exports = router;