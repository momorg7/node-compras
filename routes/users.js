const express = require('express');
const router = express.Router();
const usersController = require('../controller/usersController');

router.post('/create', usersController.create);
router.get('/', usersController.read);

module.exports = router;