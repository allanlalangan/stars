const express = require('express');
const router = express.Router();
const { register, login, getUser } = require('../controllers/usersController');

router.get('/:id', getUser);
router.post('/', register);
router.post('/login', login);

module.exports = router;
