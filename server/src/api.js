"use strict";
const express = require('express');
const loginController = require('../controllers/loginController');
const router = express.Router();


router.post('/signin', loginController.signin);
router.post('/signup', loginController.signup);
router.get('/auth', loginController.auth);


module.exports = router;