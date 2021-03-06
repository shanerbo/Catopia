const db = require('../models/index');
const gcp = require('../lib/google-cloud-storage');
const passport = require('passport');
const upload = require('multer')();

const { sanitizeBody, body, validationResult } = require('express-validator');
const defaultCatProfUrl = "https://cars-gmbh.de/public/public/bower_components/material-design-iconic-font/svg/2.2/12%20-%20social/github.svg"
function getCatAge(daysAgo) {
  const catAge = new Date();
  catAge.setTime(catAge.getTime() - daysAgo * 24 * 60 * 60 * 1000);
  return catAge;
}

exports.addCat = [
  upload.any(),
  (req, res, next) => {
    console.log(req.body);
    next();
  },
  passport.authenticate('jwt', { session: false }),
  body('age', "age must be a number").exists().not().isEmpty().isInt(),
  body('name', "name can't be empty").exists().not().isEmpty(),
  body('color', "color can't be empty").exists().not().isEmpty(),
  body('spay', "spay must be a boolean").exists().isBoolean().not().isEmpty(),
  sanitizeBody('name').escape(),
  sanitizeBody('color').escape(),
  sanitizeBody('age').escape().toInt(),
  sanitizeBody('spay').escape().toBoolean(),
  (req, res, next) => { req.uploadBucket = "cat_prof"; next(); },
  gcp.uploadImgToGCP,
  (req, res, next) => {
    const errors = validationResult(req);
    console.log(errors.array());
    if (!errors.isEmpty()) {
      console.log("validation errors", errors.array());
      return res.status(400).json(errors.array());
    }
    const catProfUrl = req.files[0] ?
      req.files[0].cloudStoragePublicUrl : defaultCatProfUrl;
    console.log("welcome to add cat api bro");
    const newCat = {
      name: req.body.name,
      color: req.body.color,
      gender: req.body.gender,
      age: getCatAge(req.body.age),
      spay: req.body.spay,
      prof_url: catProfUrl,
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
  sanitizeBody('age').escape().toInt(),
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
      gender: req.body.gender,
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