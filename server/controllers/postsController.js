const User = require('../models/index').Users;
const Post = require('../models/index').Posts;
const { sanitizeBody, body, validationResult } = require('express-validator');
const jwtsecret = process.env.JWTSECRET;
const passport = require('passport');

/*
* @param 
*/
exports.postPhoto = [
	passport.authenticate('jwt', { session: false }),
	sanitizeBody('description').escape(),
];