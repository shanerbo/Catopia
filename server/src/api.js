"use strict";
const express = require('express');
const loginController = require('../controllers/loginController');
const postsController = require('../controllers/postsController');
const userController = require('../controllers/userController');
const router = express.Router();


router.post('/signin', loginController.signin);
router.post('/signup', loginController.signup);
router.get('/auth', loginController.auth);
router.get('/photo/all', postsController.getPosts);//show all post
router.get('/photo/user/:id', postsController.getUserPosts);// show user's profile
router.post('/photo', postsController.postPhoto);
router.post('/user/:id/follow', userController.followOrUnfollow);// follow new user
router.get('/user/:id', userController.getUserProfile);// follow new user


module.exports = router;