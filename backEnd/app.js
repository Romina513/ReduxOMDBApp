var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

// Added these modules
var passport = require('passport');
var mongoose = require('mongoose');
// var expressSession = require('express-session');
var passportConfig = require('./config/passportConfig.js');
var User = require('./models/users');

// Connect to mongoose db
mongoose.connect('mongodb://localhost/movieDatabase');

var index = require('./routes/index');
var users = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Invoking passport configuration function
passportConfig(app);

// Added
const allowCrossOrigin = function(req, res, next) {
   // intercept OPTIONS method
   if ('OPTIONS' == req.method) {
     res.set({
       'Access-Control-Allow-Origin': 'http://localhost:8000',
       'Access-Control-Allow-Credentials': true,
       'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, PATCH, DELETE',
       "Access-Control-Allow-Headers": "Origin, X-Requested-With, Accept, Header, Content-Type, access-control-allow-origin",
       'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8',
     });
     return res.sendStatus(200);
   }
   res.set({
     'Access-Control-Allow-Origin': 'http://localhost:8000',
     'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, PATCH, DELETE',
     'Access-Control-Allow-Headers':"header, Authorization,Content-Type,Accept,Origin,User-Agent,DNT,Cache-Control,X-Mx-ReqToken,Keep-Alive,X-Requested-With,If-Modified-Since",
     'Access-Control-Allow-Credentials': true,
   });
   next();

};

app.use(allowCrossOrigin);

app.use('/', index);
app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
