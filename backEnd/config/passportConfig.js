var passport = require('passport');
var expressSession = require('express-session');
var LocalStrategy = require('passport-local'); //var LocalStrategy = require('passport-local').Strategy;
var User = require('../models/users.js');


function configurePassport(app) {
  app.use(expressSession({
    secret: 'secret string',
    resave: false,
    saveUninitialized: false,
  }));

  app.use(passport.initialize());
  app.use(passport.session());

  // Todas estas funciones nos las da el plugin de Mongoose
  // Acá las conectamos con Passport
  passport.use(new LocalStrategy(User.authenticate())); // Aca creamos la estragegia
  // La funcion authenticate() devuelve datos del usuario si es un usuario autenticado y false si no.
  passport.serializeUser(User.serializeUser()); // Función que guarda los datos en la db de sesiones.
  passport.deserializeUser(User.deserializeUser());
  // Función que recupera los datos de la db de sesiones.
}

module.exports = configurePassport;
