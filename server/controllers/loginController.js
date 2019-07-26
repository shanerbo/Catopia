const Users = require('../models/index').Users;
const jwt = require('jsonwebtoken');
const { sanitizeBody, body, validationResult } = require('express-validator');
const jwtsecret = process.env.JWTSECRET;
const passport = require('passport');

function generateJwt(userObj) {
  var expiry = new Date();
  expiry.setDate(expiry.getDate() + 3);
  userObj.exp = parseInt(expiry.getTime() / 1000);
  delete userObj['pwd'];
  console.log(userObj);
  return jwt.sign(userObj, jwtsecret); // DO NOT KEEP YOUR SECRET IN THE CODE!
};

function issueJwt(req, res) {
  if (req.user) {
    const token = generateJwt(req.user);
    res.json({ token });
  }
};

exports.signin = [
  // Validate fields.
  body('email', 'Eamil must be valid.').isEmail().isLength({ min: 1 }).trim(),
  body('password', 'Password must longer than 6 characters.').isLength({ min: 6 }).trim(),
  (req, res, next) => {
    const errors = validationResult(req);
    // console.log("printing:", req.body);
    if (!errors.isEmpty()) {
      console.error(errors);
      res.status(400).json(errors);
    } else {
      next();
    }
  },
  passport.authenticate('local', { session: false }),
  issueJwt
];


exports.auth = [
  passport.authenticate('jwt', { session: false }), issueJwt
];

exports.signup = [

  // Validate fields.
  body('email', 'Eamil must be valid.').isEmail().isLength({ min: 1 }).trim(),
  body('password', 'Password must longer than 6 characters.').isLength({ min: 6 }).trim(),
  body('password_repeat').custom((value, { req }) => {
    if (value != req.body.password) {
      throw new Error('Password confirmation does not match password');
    }
    return true;
  }).isLength({ min: 6 }).trim(),
  function (req, res, next) {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      res.status(400).json({ error: errors.array() });
    } else {
      Users.createUser(
        req.body.username,
        req.body.password,
        //TODO: add these inputs for signup
        null,//firstName,
        null,//lastName,
        req.body.email,
        null, //gender,
        null, //phone,
        null, //bio,
        null, //prof_url
      )
        .then((result) => {
          console.log("signup result:", result.dataValues);
          let user = result.dataValues;
          delete user.pwd;
          const token = generateJwt(user);
          res.json({ token });
        }).catch((err) => {
          console.log(err);
          next(err);
        });
    }
  }];




