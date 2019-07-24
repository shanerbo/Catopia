const db = require('../models/index');
const gcp = require('../lib/google-cloud-storage');
const { sanitizeBody, body, validationResult } = require('express-validator');
const passport = require('passport');
const upload = require('multer')();

/*
* @param: 
*   - an array of image files in req.body.photos
*   - a description
*        
*/
exports.postPhoto = [
	// body(''),
	sanitizeBody('description').escape(),
	passport.authenticate('jwt', { session: false }),
	upload.any(),
	(req, res, next) => { req.uploadBucket = "user_posts"; next(); },
	gcp.uploadImgToGCP,
	async (req, res, next) => {
		console.log(req.files);
		const newPost = await db.Posts.createPost(req.user.id, req.body.description);
		let addPhotoPromise = [];
		req.files.forEach(file => {
			addPhotoPromise.push(db.post_media.addPostMedia(newPost.get('id'), file.cloudStoragePublicUrl));
		});
		const addedPhotos = await Promise.all(addPhotoPromise);
		if (addedPhotos.length === req.files.length) {
			res.json({ upload: "success" });
		}
	}
];

exports.getPosts = (req, res, next) => {
	db.Posts.findAll({
		include: [
			{
				model: db.Comments,
				include: [
					{
						model: db.Users,
						attributes: [['id', 'commentUserId'], ['userName', 'commentUserName'], ['email', 'commentUserEmail']]
					}
				]
			},
			{
				model: db.Cats,
				require: true

			},
			{
				model: db.Users,
				attributes: [['id', 'postOwnerId'], ['userName', 'postOwnerName'], ['prof_url', 'postOwnerProfUrl']]
			},
			{
				model: db.post_media
			}
		]
	}).then(result => {
		console.log(result);
		res.json(result[1]);
	})
};

