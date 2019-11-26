var mongoose = require('mongoose');

// The factSchema is used to embedded docs in as tudent doc.
// There is no model and no 'facts' collection

// var factSchema = new mongoose.Schema({
//   text: String
// }, {
//   timestamps: true
// });

var userSchema = new mongoose.Schema({
  name: String,
  email: String,
  googleId: String
});

module.exports = mongoose.model('User', userSchema);