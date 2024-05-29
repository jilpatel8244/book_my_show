const express = require('express');
const router = express.Router();

const { getAllUsers, insertUser, deleteUser } = require('../controllers/user.controller');

router.get('/get-users', getAllUsers);
router.post('/insert-user', insertUser);
router.post('/delete-user', deleteUser);

module.exports = router;