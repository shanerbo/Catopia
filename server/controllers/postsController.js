const db = require('../models/index');
const Op = db.Sequelize.Op;
const gcp = require('../lib/google-cloud-storage');
const { sanitizeBody, body, validationResult } = require('express-validator');
const passport = require('passport');
const upload = require('multer')();
const path = require('path');
// ------------------helper constants------------------
const postQuery = () => {
  return {
    include: [
      {
        model: db.Comments,
        include: [
          {
            model: db.Users,
            attributes: [['id', 'commentUserId'], ['userName', 'commentUserName'], ['email', 'commentUserEmail']]
          }
        ],
        order: [['createdAt', 'DESC']]
      },
      {
        model: db.Cats,
        attributes: [['id', 'cat_id'], 'prof_url', 'name'],
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
    ],
    order: [['createdAt', 'DESC']]
  }
}

// ------------------------------------------------------
exports.getCatPosts = [
  async (req, res, next) => {
    const cat_id = req.params.id;
    const allPostQuery = postQuery();
    const allPost_cats = await db.Cats.findOne({
      include: [
        {
          model: db.Posts,
          include: allPostQuery.include,
          order: allPostQuery.order
        }],
      where: {
        id: cat_id
      }
    });
    console.log(allPost_cats);
    res.json(allPost_cats);
  }
]

exports.getUserLikedPosts = [
  passport.authenticate('jwt', { session: false }),
  async (req, res, next) => {
    console.log("!!!");
    if (!req.user) {
      res.json({ error: "Please login" });
    } else {
      const user_id = req.user.id;
      const likedPostArray = (await db.post_likes.findAll({
        where: {
          user_id: user_id
        }
      })).map(ele => ele.get('post_id'));
      console.log("dat array", likedPostArray, typeof likedPostArray);
      const allPostQuery = postQuery();
      allPostQuery.where = {
        id: likedPostArray
      }

      const likedPost = await db.Posts.findAll(allPostQuery);

      res.json(likedPost);
    }
  }
];

exports.getFollowingUsersPosts = [
  passport.authenticate('jwt', { session: false }),
  async (req, res, next) => {
    if (!req.user) {
      res.json({ error: "Please login" });
    } else {
      const allFollowingInfo = await db.Follows.getFollower(req.user.id, "following");
      const allFollowingArray = [];
      allFollowingInfo.forEach(element => {
        allFollowingArray.push(element.following + '');
      });
      const ret = await db.Posts.getFollowingUserPosts(postQuery(), allFollowingArray);
      res.json(ret);

    }
  }
]

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

/*
* @param: 
*   - comment content
*   - 
*        
*/
exports.commentOnPhoto = [
  sanitizeBody('content').escape(),
  passport.authenticate('jwt', { session: false }),
  (req, res, next) => {
    db.Comments.addComment(req.user.id, req.params.id, req.body.content)
      .then((comment) => {
        res.json({ comment: "success" });
      })
      .catch((error) => {
        next(error);
      });
  }
];

exports.getPosts = (req, res, next) => {
  db.Posts.findAll(postQuery()).then(result => {
    // console.log("after:", result);
    res.json(result);
  });
};

exports.getUserPosts = (req, res, next) => {
  let searchCondition = postQuery();
  if (!req.params.id || !Number(req.params.id)) {
    res.status(400).json({ error: "id is missing or invalid" });
  }
  searchCondition.where = {
    "user_id": req.params.id
  };
  db.Posts.findAll(searchCondition).then(result => {
    res.json(result);
  });
};

exports.likeOrUnlike = [
  passport.authenticate('jwt', { session: false }),
  async (req, res, next) => {
    if (req.user) {
      const exist = await db.post_likes.findOne({
        where: {
          user_id: req.user.id,
          post_id: req.params.id
        }
      }).catch(error => next(error));
      if (!exist) {
        const entry = {
          user_id: req.user.id,
          post_id: req.params.id
        }
        const create = await db.post_likes.create(entry);
        if (create.length !== 0) {
          res.status(200);
          res.json({ result: "liked" });
        } else {
          res.json({ result: "likeFailed" });
        }
      } else {
        exist.destroy();
        res.status(200);
        res.json({ result: "unliked" });
      }
    } else {
      res.json({ error: "Needs login to follow user" });
    }
  }
];




