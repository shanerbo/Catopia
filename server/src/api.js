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
router.get('/photo/user/:id', postsController.getUserPosts);// show certain user's photos
router.get('/photo/following', postsController.getFollowingUsersPosts);// show user's following users' photos
router.get('/photo/cat/:id', postsController.getCatPosts);// show certain cat's posts
router.post('/photo', postsController.postPhoto);// post a post
router.post('/user/:id/follow', userController.followOrUnfollow);// follow new user
router.get('/user/:id', userController.getUserProfile);// get user profile
router.get('/user/:id/follower', userController.getUserFollower);// get user follower
router.get('/user/:id/following', userController.getUserFollowing);// get user following


module.exports = router;