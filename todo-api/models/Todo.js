mongoose = require('mongoose');

GunRangeMemberSchema = new mongoose.Schema({
  memID: String,
  fname: String,
  midIN: String,
  lname: String,
  lastpaid: Date,
  nextpaid: Date,
  completed: Boolean,
  note: String,
  updated_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Todo', GunRangeMemberSchema);
