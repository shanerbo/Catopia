const db = require('../models/index');
const gcp = require('../lib/google-cloud-storage');
const { sanitizeBody, body, validationResult } = require('express-validator');
const passport = require('passport');

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
  (req, res, next) => {
    console.log(req.body.description);
    if (req.user) {
      res.json({ upload: "success!" });

    } else {
      res.json({ error: "Needs login to upload photos" });
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

