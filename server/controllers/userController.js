const db = require('../models/index');
const passport = require('passport');
const { sanitizeBody, body, validationResult } = require('express-validator');

async function getFollowInfo(req, res, next, followerOrFollowing) {
	const condition = followerOrFollowing === 'following' ? 'follower' : 'following';
	const allFollowInfo = await db.Follows.findAll({
		where: { [condition]: req.params.id },
		attributes: [followerOrFollowing]
	})
	if (allFollowInfo.length !== 0) {
		res.status(200);
		res.json(allFollowInfo);
	} else {
		res.status(200);
		res.json(followerOrFollowing === 'following' ? "notFollowingAnyone" : "haveNoFollower")
	}
}

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
		})
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
			const exist = await db.Follows.findOne({
				where: { follower: req.user.id, following: req.params.id }
			});
			if (!exist) {
				const entry = {
					follower: req.user.id,
					following: req.params.id,
				}
				const create = await db.Follows.create(entry);
				if (create.length !== 0) {
					res.status(200);
					res.json("followed");
				} else {
					res.json("followFailed");
				}
			} else {
				exist.destroy();
				res.status(200);
				res.json("unFollowed")
			}
		} else {
			res.json({ error: "Needs login to follow user" });
		}
	}
]