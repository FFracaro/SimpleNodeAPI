const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.post('/register', userController.createUser);

router.post('/', );

module.exports = app => app.use('/user', router);