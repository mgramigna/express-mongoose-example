// external modules
var mongoose = require("mongoose");

// custom module (our mongoose model)
var User = require('./models/User');

// test is the name of the database we want to connect to
// this can be anything you want
mongoose.connect('mongodb://localhost/test');

var db = mongoose.connection;

// connection error
db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function() {
  console.log('we are connected!');
});

module.exports = {
  getUser,
  addUser,
  deleteUser,
  updateUser
}

/**
 * @function getUser
 * @description Retrieve a user from Mongodb with a matching username
 * @param {String} username the username to search for
 * @return {Promise} resolves to the user object
 */
function getUser(username) {
  return User.findOne({ username }); // shorthand for User.find({ username: username })
}

/**
 * @function addUser
 * @description Add a user to the database
 * @param {String} username the username of the new user
 * @param {String} password the password of the new user
 * @param {String} age the age of the new user
 * @return {Promise} resolves to the created user object
 */
function addUser(username, password, age) {
  // use the constructor defined by our mongoose model
  const user = new User({
    username,
    password,
    age
  });

  return user.save();
}

/**
 * @function deleteUser
 * @description Delete a user from Mongodb with a matching username
 * @param {String} username the username to search for
 * @return {Promise} resolves to an object indicating how many entries were affected and if the deletion happened properly
 */
function deleteUser(username) {
  // find user by username and remove them from the database
  return User.findOne({ username }).remove();
}

/**
 * @function updateUser
 * @description Update a user's info
 * @param {String} username the username to search for
 * @param {Object} newInfo an object containing one of more fields to update for a user
 * @return {Promise} resolves to the updated user object
 */
function updateUser(username, newInfo) {
  // update a user's info
  return User.findOneAndUpdate({ username }, newInfo, {new: true}); //return updated user
}
