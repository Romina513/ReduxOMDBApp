var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var passportLocalMongoose = require('passport-local-mongoose');
var favorites = require('./Favorites');

var UserSchema = new Schema({
  favorites: [{
    type: mongoose.Schema. Types.ObjectId,
    ref: 'favorites'
  }]
});

UserSchema.plugin(passportLocalMongoose);

var User = mongoose.model('User', UserSchema);

module.exports = User;
