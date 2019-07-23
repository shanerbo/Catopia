"use strict";
const express = require('express');
const loginController = require('../controllers/loginController');
const postsController = require('../controllers/postsController');
const router = express.Router();


router.post('/signin', loginController.signin);
router.post('/signup', loginController.signup);
router.get('/auth', loginController.auth);
router.post('/photo', postsController.postPhoto);


module.exports = router;