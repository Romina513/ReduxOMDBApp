var express = require('express');
var router = express.Router();
var passport = require('passport');


router.get('/', function(req, res, next) {
  res.render('index', { title: 'Movie Database' });
});

module.exports = router;
