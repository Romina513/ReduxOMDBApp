var express = require('express');
var router = express.Router();

var passport = require('passport');
//var middleware = require('../middleware/middleware.js');
var app = require('../app.js');
var bodyParser = require('body-parser');
var urlParser = bodyParser.urlencoded({ extended:true });
var isLoggedIn = require('../middleware/middleware.js');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

// Log in  route
router.get('/login', function(req, res) {
  res.render('login');
});

router.post('/login', urlParser, passport.authenticate('local', {
  failureRedirect: '/register',
}), function(req, res) {
  console.log('Logged in!');
  res.send('You are logged in!');
});

router.get('logout', function(req, res) {
  res.send('logout');
});

router.get('/register', function(req, res, next) {
  res.send('register');
});

router.post('/register', urlParser, function(req, res) {
  console.log(req.body);
  var newUser = new User({ username: req.body.username });
  User.register(newUser, req.body.password, function (err, user) {
    if(err) {
      console.log(err);
      return res.send('There was an error in registration');
    }
    res.send('User created ' + user.username);
  });
});

router.get('/favorites', isLoggedIn, function(req, res) {
  res.render('favorites');
});


module.exports = router;
