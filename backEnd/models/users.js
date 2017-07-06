var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var passportLocalMongoose = require('passport-local-mongoose');
var favorites = require('./favorites');

var UserSchema = new Schema({
  // username: { type: String, required: true },
  // password: { type: String, required: true },
  favorites: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'favorites'
  }]
});

UserSchema.plugin(passportLocalMongoose);

var User = mongoose.model('User', UserSchema);

module.exports = User;
