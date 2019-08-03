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
    // console.log("entered email&pw", email, password);
    await User.findOne({ where: { email: email } }).then((user) => {
      if (!user || !bcrypt.compareSync(password, user.pwd)) {
        return done(null, false, "Email or password don't match. Please try again.");
      }
      user = user.dataValues;
      delete user.pwd;
      console.log("auth success, logging in");
      console.log("user:", user.userName);
      return done(null, user);
    }).catch((error) => {
      console.error(error);
      throw new Error("Looks like db is down");
    });
  });

  const jwtLogin = new JwtStrategy({
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: jwtSecret
  }, async (payload, done) => {
    // console.log("payload", payload);
    if (!payload.id) {
      return done(null, false);
    }
    const now = new Date().getTime();
    const expiration = payload.exp * 1000;
    if (expiration <= now) {
      // console.log(now);
      // console.log(expiration);
      return done(null, false);
    }
    let user = await User.findByPk(payload.id);
    if (user) {
      user = user.dataValues;
      delete user.pwd;
      console.log("user found:", user);
      return done(null, user);
    } else {
      return done("jwt token invalid", false);
    }
  });

  passport.use(jwtLogin);
  passport.use(localLogin);
  return passport;
}