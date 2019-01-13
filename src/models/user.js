const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const saltRounds = 10;

const userSchema = mongoose.Schema({
  email: { type: String, lowercase: true, required: true, unique: true },
  password: { type: String, required: true },
  firstName: { type: String },
  lastName: { type: String },
  places: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Place' }],
  condies: {
    temperature: { type: Number, default: 55 },
    humidity: { type: Number, default: 0.60 }
  } 
});

// Hash users password before adding to database
userSchema.pre('save', function(done) {
  var user = this;

  // only hash password if it is new or has been modified
  if (!user.isModified('password')) { return done(); }

  bcrypt.genSalt(saltRounds, (err, salt) => {
    if (err) { return done(err); }
    bcrypt.hash(user.password, salt, (err, hashedPassword) => {
      if (err) { return done(); }
      user.password = hashedPassword;
      done();
    });
  });
});

// Compare password guess against hashed password stored in database
userSchema.methods.checkPassword = function(passwordGuess, done) {
  bcrypt.compare(passwordGuess, this.password, (err, isMatch) => {
    done(err, isMatch);
  });
};

const User = mongoose.model('User', userSchema);

module.exports = User;