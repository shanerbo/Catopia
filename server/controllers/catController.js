const db = require('../models/index');
const passport = require('passport');
const { sanitizeBody, body, validationResult } = require('express-validator');

function getCatAge(daysAgo) {
	const catAge = new Date();
	catAge.setTime(catAge.getTime() - daysAgo * 24 * 60 * 60 * 1000);
	return catAge;
}

exports.addCat = [
	(req, res, next) => {
		console.log(req.body);
		next();
	},
	passport.authenticate('jwt', { session: false }),
	sanitizeBody('name').escape(),
	sanitizeBody('color').escape(),
	sanitizeBody('age').escape().toInt(),
	sanitizeBody('spay').escape().toBoolean(),
	body('age', "age must be a number").isInt(),
	body('spay', "spay must be a boolean").isBoolean(),

	(req, res, next) => {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			console.log("validation errors", errors.array());
			return res.status(400).json(errors.array());
		}

		console.log("welcome to add cat api bro");
		const newCat = {
			name: req.body.name,
			color: req.body.color,
			breed: req.body.breed,
			age: getCatAge(req.body.age),
			spay: req.body.spay,
			prof_url: "https://storage.googleapis.com/cat_prof/Cat%20-%201.jpeg",
			user_id: req.user.id
		};
		console.log(newCat);
		db.Cats.createCat(newCat).then((result) => {
			res.status(200).json({ addCat: "success" });
		}).catch((error) => next(error));

	}
];

exports.updateCat = [
	passport.authenticate('jwt', { session: false }),
	sanitizeBody('name').escape(),
	sanitizeBody('color').escape(),
	sanitizeBody('age').escape(),
	sanitizeBody('spay').escape().toBoolean(),
	body('age').isInt(),
	body('spay').isBoolean(),

	async (req, res, next) => {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			console.log("validation errors", errors.array());
			return res.status(400).json(errors.array());
		}

		const catAge = getCatAge(req.body.age);

		const newCat = {
			name: req.body.name,
			color: req.body.color,
			breed: req.body.breed,
			age: catAge,
			spay: req.body.spay,
			prof_url: "https://storage.googleapis.com/cat_prof/Cat%20-%201.jpeg"
		};
		const cat = await db.Cats.findOne({ where: { id: req.params.id } });
		if (!cat) {
			return res.status(404).json({ result: "cat not exist" });
		}
		if (req.user.id != cat.get('user_id')) {
			return res.status(401).json({ result: "You can't edit someone else's cat" });
		}
		cat.update(newCat).then((result) => {
			res.status(200).json({ result: "success" });
		}).catch((error) => next(error));

	}
];