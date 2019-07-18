const User = require('../models/index').User;
const bcrypt = require('bcrypt');
const { sanitizeBody, body, validationResult } = require('express-validator');


exports.signin = [
  (req, res, next) => {
    console.log("req body:", req.body);
    next();
  },
  // Validate fields.
  body('email', 'Eamil must be valid.').isEmail().isLength({ min: 1 }).trim(),
  body('password', 'Password must longer than 8 characters.').isLength({ min: 6 }).trim(),
  (req, res, next) => {
    const errors = validationResult(req);
    // console.log("printing:", req.body);
    if (!errors.isEmpty()) {
      console.error(errors);

      res.status(400).json(errors);
    } else {

      res.send("signing in");

    }
  }];

exports.signup = [

  // Validate fields.
  body('email', 'Eamil must be valid.').isEmail().isLength({ min: 1 }).trim(),
  body('password', 'Password must longer than 8 characters.').isLength({ min: 6 }).trim(),
  body('password_repeat', 'Re-entered password must be the same as password').custom((value, { req }) => {
    console.log(value, "and", req.body.password);
    if (value !== req.body.password) {
      return false;
    }
    return true;
  }).isLength({ min: 6 }).trim(),
  function (req, res, next) {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      res.status(400).json({ error: errors.array() });
    } else {
      const newUser = {
        email: req.body.email,
        password: req.body.password,

      };
      User.create(newUser)
        .then((result) => {
          // const token = jwt.sign(user.toJSON())
          // res.json({success: true, token: 'JWT '+token})
          res.json({ success: true })
        }).catch((error) => {

        });
      console.log(req.body);
    }

  }];


