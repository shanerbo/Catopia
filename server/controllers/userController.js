const db = require('../models/index');
const passport = require('passport');
const { sanitizeBody, body, validationResult } = require('express-validator');

async function getFollowInfo(req, res, next, followerOrFollowing) {
	const allFollowInfo = await db.Follows.getFollower(req.params.id, followerOrFollowing);
	console.log(allFollowInfo);
	res.status(200);
	res.json(allFollowInfo);
}

exports.getFollowerCount = [
	async (req, res, next) => {
		const allFollowInfo = await db.Follows.getFollower(req.params.id, 'follower');
		res.json(allFollowInfo.length);
	}
]

exports.getFollowingCount = [
	async (req, res, next) => {
		const allFollowInfo = await db.Follows.getFollower(req.params.id, 'following');
		res.json(allFollowInfo.length);
	}
]

exports.getRecommendUsers = [
	async (req, res, next) => {
		const ret = await db.Users.getRecommendUsers();
		res.json(ret);
	}
]

exports.getUserFollowing = [
	async (req, res, next) => {
		getFollowInfo(req, res, next, 'following');
	}
]

exports.getUserFollower = [
	async (req, res, next) => {
		getFollowInfo(req, res, next, 'follower');
	}
]

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
]

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
				const mutual = isFollowed ? 1 : 0;
				const entry = {
					user_id: req.user.id,
					following: req.params.id,
					mutual: mutual
				}
				if (isFollowed) {
					await db.Follows.update({ "mutual": 1 }, { where: { user_id: req.params.id, following: req.user.id } });
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
				await db.Follows.update({ "mutual": 0 }, { where: { user_id: req.params.id, following: req.user.id } });
				res.status(200);
				res.json({ result: "unFollowed" })
			}
		} else {
			res.json({ error: "Needs login to follow user" });
		}
	}
]