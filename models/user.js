var mongoose = require('mongoose');

// var factSchema = new mongoose.Schema({
//   text: String
// }, {
//   timestamps: true
// });

var billSchema = new mongoose.Schema ({
  name: {
      type: String
  },
  price: {
      type: Number
  },
  dueDate: {
      type: Date
  },
  category: {
      type: String
  }
})


var userSchema = new mongoose.Schema({
  name: String,
  email: String,
  googleId: String,
  bill: [billSchema]
});

module.exports = mongoose.model('User', userSchema);