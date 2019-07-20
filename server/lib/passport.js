const passport = require('passport');
const LocalStrategy = require('passport-local');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const bcrypt = require('bcrypt');

const User = require('../models/index').Users;
const jwtSecret = process.env.JWTSECRET;

module.exports = (Users) => {

  const localLogin = new LocalStrategy({
    usernameField: 'email'
  }, async (email, password, done) => {
    console.log("entered email&pw", email, password);
    await User.findOne({ where: { email: email } }).then((user) => {
      console.log("found User:", user.dataValues);
      if (!user || !bcrypt.compareSync(password, user.pwd)) {
        return done(null, false, { error: "Email or password don't match. Please try again." });
      }
      user = user.dataValues;
      delete user.pwd;
      done(null, user);
    }).catch((error) => {
      console.error(error);
      done(null, false, { error: "something is wrong" });
    });
  });

  const jwtLogin = new JwtStrategy({
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: jwtSecret
  }, async (payload, done) => {
    console.log("payload", payload);
    if (!payload.id) {
      done(null, false);
    }
    let user = await User.findByPk(payload.id);
    if (user) {
      user = user.dataValues;
      delete user.pwd;
      console.log("user found:", user);
      done(null, user);
    } else {
      done(null, false);
    }
  });

  passport.use(jwtLogin);
  passport.use(localLogin);
  return passport;
}