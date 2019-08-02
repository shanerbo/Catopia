"use strict";
const express = require('express');
const loginController = require('../controllers/loginController');
const postsController = require('../controllers/postsController');
const userController = require('../controllers/userController');
const catController = require('../controllers/catController');
const searchController = require('../controllers/searchController');
const router = express.Router();


router.get('/auth', loginController.auth);

router.post('/signin', loginController.signin);
router.post('/signup', loginController.signup);

router.get('/photo/all', postsController.getAllPosts);//show all post
router.get('/photo/user/:id', postsController.getUserPosts);// show certain user's photos
router.get('/photo/following', postsController.getFollowingUsersPosts);// show user's following users' photos
router.post('/photo/:id/like', postsController.likeOrUnlike); //show certain photo's like
router.get('/photo/cat/:id', postsController.getCatPosts);// show certain cat's posts
router.get('/photo/like', postsController.getUserLikedPosts);//get user liked posts
router.post('/photo', postsController.postPhoto);// post a post

router.post('/photo/:id/comment', postsController.commentOnPhoto);// post a post
router.get('/user/recommend', userController.getRecommendUsers);// get recommendUsers
router.post('/user/:id/follow', userController.followOrUnfollow);// follow new user
router.get('/user/:id', userController.getUserProfile);// get user profile
router.post('/user/edit', userController.updateUser);// update user profile
router.get('/user/:id/follower', userController.getUserFollower);// get user follower
router.get('/user/:id/following', userController.getUserFollowing);// get user follower
router.get('/user/:id', userController.getUserProfile);// get user profile

router.get('/user/:id/userInfo', userController.getUserInfo) // get whole user info

router.post('/user/:id/follow', userController.followOrUnfollow);// follow new user

router.post('/cat/new', catController.addCat);
router.post('/cat/:id/edit', catController.updateCat);

router.get('/search', searchController.searchForUserOrCat);

module.exports = router;