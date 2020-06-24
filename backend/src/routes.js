const express = require('express');
const validations = require('./middlewares/validations');
const UserController = require('./controllers/UserController');
const logoutController = require('./controllers/LogoutController');
const { ensureAuthenticated, fowardAuthenticated } = require('./middlewares/authenticated');
const passport = require('passport');

const routes = express.Router();

routes.post('/login', passport.authenticate('local', {
  successRedirect: '/perfil',
  failureRedirect: '/',
}));
routes.post('/logout', logoutController);

routes.post('/create', UserController.store);
routes.get('/perfil', UserController.show);

module.exports = routes;