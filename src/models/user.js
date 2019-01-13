const mongoose = require('mongoose');

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

const User = mongoose.model('User', userSchema);

module.exports = User;