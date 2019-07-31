const db = require('../models/index');
const passport = require('passport');
const upload = require('multer')();
const gcp = require('../lib/google-cloud-storage');
const jwt = require('jsonwebtoken');
const jwtsecret = process.env.JWTSECRET;
const defaultUserProfUrl = "https://www.paramedicmemorial.org/wp-content/uploads/2018/04/placeholder-avatar.png"
const { sanitizeBody, body, validationResult } = require('express-validator');


function generateJwt(userObj) {
	var expiry = new Date();
	expiry.setDate(expiry.getDate() + 3);
	userObj.exp = parseInt(expiry.getTime() / 1000);
	delete userObj['pwd'];
	console.log(userObj);
	return jwt.sign(userObj, jwtsecret); // DO NOT KEEP YOUR SECRET IN THE CODE!
};

function issueJwt(req, res) {
	if (req.user) {
		const token = generateJwt(req.user);
		res.json({ token });
	}
};

async function getFollowInfo(req, res, next, followerOrFollowing) {
	const allFollowInfo = await db.Follows.getFollower(req.params.id, followerOrFollowing);
	return allFollowInfo;
}

exports.getUserInfo = [
	async (req, res, next) => {
		let userInfo = (await db.Users.findOne({ where: { id: req.params.id } })).toJSON();
		delete userInfo.pwd;
		const followerList = await getFollowInfo(req, res, next, 'follower');
		const followingList = await getFollowInfo(req, res, next, 'following');
		const catInfo = await db.Cats.findUserCats(req.params.id);
		userInfo.following = followingList;
		userInfo.follower = followerList;
		userInfo.cat = catInfo;
		res.json(userInfo);

	}
]


exports.getRecommendUsers = [
	async (req, res, next) => {
		const ret = await db.Users.getRecommendUsers();
		res.json(ret);
	}
];

exports.getUserFollowing = [
	async (req, res, next) => {
		getFollowInfo(req, res, next, 'following');
	}
];

exports.getUserFollower = [
	async (req, res, next) => {
		getFollowInfo(req, res, next, 'follower');
	}
];

exports.getUserProfile = [
	async (req, res, next) => {
		const userProfile = await db.Users.findOne({
			where: { id: req.params.id },
			attributes: ['userName', 'firstName', 'lastName', 'email', 'gender', 'phone', 'bio', 'prof_url', 'createdAt']
		}).catch(error => next(error));
		if (userProfile) {
			res.status(200);
			res.json(userProfile);
		} else {
			res.status(200);
			res.json('userNotExist');
		}
	}
];

exports.followOrUnfollow = [
	passport.authenticate('jwt', { session: false }),
	async (req, res, next) => {
		if (req.user) {
			if (req.user === req.params.id) {
				res.json({ error: "Can't follow yourself" });
			}
			const exist = await db.Follows.findOne({
				where: { user_id: req.user.id, following: req.params.id }
			}).catch(error => next(error));
			if (!exist) {
				const isFollowed = await db.Follows.findOne({ where: { user_id: req.params.id, following: req.user.id } })
				const entry = {
					user_id: req.user.id,
					following: req.params.id,
				}
				const create = await db.Follows.create(entry);
				if (create.length !== 0) {
					res.status(200);
					res.json({ result: "followed" });
				} else {
					res.json({ result: "followFailed" });
				}
			} else {
				exist.destroy();

				res.status(200);
				res.json({ result: "unFollowed" })
			}
		} else {
			res.json({ error: "Needs login to follow user" });
		}
	}
];

exports.updateUser = [
	passport.authenticate('jwt', { session: false }),
	sanitizeBody('firstName').escape(),
	sanitizeBody('lastName').escape(),
	sanitizeBody('gender').escape(),
	sanitizeBody('phone').escape(),
	sanitizeBody('bio').escape(),
	sanitizeBody('prof_url').escape(),
	body('phone', 'Phone number must be number').isLength({ max: 10 }).trim(),
	upload.any(),
	(req, res, next) => { req.uploadBucket = "user_prof"; next(); },
	gcp.uploadImgToGCP,

	async (req, res, next) => {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(400).json({ error: 'Invalid phone number' });
		}
		console.log(req.body);
		const newUserInfo = {
			userName: req.body.userName,
			firstName: req.body.firstName,
			lastName: req.body.lastName,
			email: req.body.email,
			gender: req.body.gender,
			phone: req.body.phone,
			bio: req.body.bio,
		}
		if (req.files[0]) {
			newUserInfo.prof_url = req.files[0].cloudStoragePublicUrl;
		}
		if (req.body.pwd && req.body.pwd >= 6) {
			newUserInfo.pwd = req.body.pwd;
		} else if (req.body.pwd && req.body.pwd < 6) {
			return req.status(400).json({ error: "password update fail" });
		}
		const oldUser = await db.Users.findOne({
			where: { id: req.user.id }
		}).catch((error) => next(error));

		if (!oldUser) {
			return res.status(400).json({ error: "Need to login to edit profile" });
		}
		const newUser = await db.Users.updateUser(oldUser, newUserInfo).catch((error) => next(error));
		if (newUser) {
			req.user = newUser.dataValues;
			delete req.user.pwd;
			next();
		}
	},
	issueJwt
];