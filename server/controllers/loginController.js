var User = require('../models/index').User;

const { sanitizeBody, body, validationResult } = require('express-validator');


exports.signin = [
  (req, res, next) => {
    console.log("req body:", req.body);
    next();
  },
  // Validate fields.
  body('email', 'Eamil must be valid.').isEmail().isLength({ min: 1 }).trim(),
  body('password', 'Password must longer than 8 characters.').isLength({ min: 8 }).trim(),
  (req, res, next) => {
    const errors = validationResult(req);
    // console.log("printing:", req.body);
    if (!errors.isEmpty()) {
      // console.log(errors);
      next(errors);
    } else {
      res.send("signing in");

    }
  }];

exports.signup = [

  // Validate fields.
  body('email', 'Eamil must not be empty.').isLength({ min: 1 }).trim(),
  body('password', 'Password must longer than 8 characters.').isLength({ min: 8 }).trim(),
  body('email', 'Email must not be a valid email address.').isEmail(),
  function (req, res, next) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      next(errors);
    } else {
      console.log(req.body);
    }

  }];


