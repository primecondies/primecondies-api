const passport = require('passport');
const BasicStrategy = require('passport-http').BasicStrategy;

const User = require('../models/user');

// Configure new passport basic strategy
passport.use(new BasicStrategy(
  (email, password, done) => {
    User.findOne({ email: email }, (err, user) => {
      if (err) { return done(err); }

      // Invalid email
      if (!user) { return done(null, false, { message: 'Invalid email' }); }

      // Check for correct password
      if (!user.checkPassword(password, (err, isMatch) => {
        if (err) { return done(err); }

        // Invalid password
        if (!isMatch) { return done(null, false, { message: 'Invalid password' }); }

        // Success
        return done(null, user);
      }));
    });
  }
));

module.exports.isAuthenticated = passport.authenticate('basic', { session: false });