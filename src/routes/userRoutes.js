const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const authController = require('../controllers/authController');

router.post('/register', userController.createUser);

router.post('/', authController.authUser);

module.exports = app => app.use('/user', router);