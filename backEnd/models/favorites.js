var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var FavoritesSchema = new Schema({
  title: {type: String},
  year: {type: String},
  director: {type: String}
});

var Favorites = mongoose.model('Favorites', FavoritesSchema);

module.exports = Favorites;
