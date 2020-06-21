const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const connection = require('../database/connection');
const bcryptjs = require('bcryptjs');

passport.serializeUser((user, done) => done(null, user.id));

passport.deserializeUser(async (id, done) => {
  try {
    const user = await connection('users').select('*').where('id', id);
    return done(null, user);
  } catch (error) {
    done(e);
  }
});

passport.use(new LocalStrategy({ passReqToCallback: true },
  async (req, username, password, done) => {
    const user = await connection('users').select('*').where('username', username);

    if (!user) return done(null, false, { message: 'User does not exist' });

    bcryptjs.compare(password, user.password, (err, isValid) => {
      if (err) return done(err);
      if (isValid) return done(null, false);
      return done(null, user);
    })
  }
  ));

  module.exports = passport;
