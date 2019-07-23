const User = require('../models/index').Users;
const Post = require('../models/index').Posts;
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