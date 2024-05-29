const express = require('express');
const { createShow, getShows } = require('../controllers/show.controller');
const router = express.Router();

router.post('/create-show', createShow);
router.post('/get-shows', getShows);

module.exports = router;