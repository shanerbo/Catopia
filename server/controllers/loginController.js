const Users = require('../models/index').Users;
const jwt = require('jsonwebtoken');
const { sanitizeBody, body, validationResult } = require('express-validator');
const jwtsecret = process.env.JWTSECRET;
const passport = require('passport');
const defaultUserProfUrl = "https://www.paramedicmemorial.org/wp-content/uploads/2018/04/placeholder-avatar.png"
function generateJwt(userObj) {
  var expiry = new Date();
  expiry.setDate(expiry.getDate() + 3);
  userObj.exp = parseInt(expiry.getTime() / 1000);
  delete userObj['pwd'];
  console.log(userObj);
  return jwt.sign(userObj, jwtsecret); // DO NOT KEEP YOUR SECRET IN THE CODE!
};
const errorFormatter = ({ location, msg, param, value, nestedErrors }) => {
  // Build your resulting errors however you want! String, object, whatever - it works!
  return `${param}: ${msg}`;
};

function issueJwt(req, res) {
  if (req.user) {
    const token = generateJwt(req.user);
    res.json({ token });
  }
};

exports.signin = [
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
    const errors = validationResult(req).formatWith(errorFormatter);
    if (!errors.isEmpty()) {
      res.status(400).send(errors.array());
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
        defaultUserProfUrl, //prof_url
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




