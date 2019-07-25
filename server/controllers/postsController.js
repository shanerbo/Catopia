const db = require('../models/index');
const gcp = require('../lib/google-cloud-storage');
const { sanitizeBody, body, validationResult } = require('express-validator');
const passport = require('passport');
const upload = require('multer')();
const path = require('path');
const postInclude = {
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
      require: true,
    },
    {
      model: db.Users,
      attributes: [['id', 'postOwnerId'], ['userName', 'postOwnerName'], ['prof_url', 'postOwnerProfUrl']]
    },
    {
      model: db.post_media,
    },
    {
      model: db.post_likes
    }
  ]
};

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
    const newPost = await db.Posts.createPost(req.user.id, req.body.description);
    let addPhotoPromises = [];
    req.files.forEach(file => {

      const promise = db.post_media.addPostMedia(newPost.get('id'), file.cloudStoragePublicUrl)
      addPhotoPromises.push(promise);
    });
    const addedPhotos = await Promise.all(addPhotoPromises).catch((err) => {
      next(err);
    });
    if (addedPhotos.length === req.files.length) {
      res.json({ upload: "success" });
    }
  }
];

exports.getPosts = (req, res, next) => {
  console.log(db.post_likes);
  db.Posts.findAll(postInclude).then(result => {
    // console.log("after:", result);
    res.json(result);
  });
};

exports.getUserPosts = (req, res, next) => {
  console.log(db.post_likes);
  let searchCondition = postInclude;
  searchCondition.where = {
    "user_id": req.params.id
  };
  db.Posts.findAll(searchCondition).then(result => {
    res.json(result);
  });
};

