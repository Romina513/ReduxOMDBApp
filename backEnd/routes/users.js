var express = require('express');
var router = express.Router();
var passport = require('passport');
var app = require('../app.js');
// var bodyParser = require('body-parser');
// var isLoggedIn = require('../middleware/middleware.js');

var user = require('../models/users.js');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

// ORIGINAL LOGIN POST ROUTE
// router.post('/login', function(req, res) {
//   const userData = {
//     username: req.body.username,
//     password: req.body.password,
//   };
//   console.log(userData);
//   console.log('Logged in!');
//   res.send('You are logged in!');
// });

router.post('/login', passport.authenticate('local'), function(req, res) {
  res.send({loggedIn: true});
});

// app.post('/login', passport.authenticate('local', {
//   failureRedirect: '/register',
// }), function(req, res) {
//   console.log('logeado');
//   res.send('Estas Logeado');
// });


router.get('/logout', function(req, res) {
  req.logout();
  res.send('logout');
});

// router.get('/register', function(req, res, next) {
//   res.send('register');
// });


// url is: '/users/register' because app.js appends /users to all routes in users.js
router.post('/register', function(req, res, next) {
  user.register(new user({username: req.body.username}), req.body.password, function(err, user) {
    if(err) {
      console.log('Error while user register!', err);
      res.send({register: false, err: err});
    } else {
      passport.authenticate('local')(req, res, function() {
        res.send({register: true, err: null});
      })
    }
  });
});

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  return res.send('<img src="https://i.ytimg.com/vi/qdYifXP5tVA/maxresdefault.jpg"/>');
}

router.get('/favorites', isLoggedIn, function(req, res) {
  res.render('favorites');
});
// *This is for private session: req.user, req.isAuthenticated = true


module.exports = router;
