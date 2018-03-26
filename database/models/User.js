var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
  username: String,
  password: String,
  age: Number
});

var User = mongoose.model('User', userSchema);

// remember module.exports?
// here we are exporting the mongoose model
module.exports = User;

