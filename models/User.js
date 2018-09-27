var db = require('../config/db');

var UserSchema = new db.Schema({
  name: {
    type: String,
    required: true
  },
  gender: {
    type: String,
    required: false
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
})

var User = module.exports = db.model('User', UserSchema);
