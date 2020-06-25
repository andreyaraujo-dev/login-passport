const express = require('express');
const validations = require('./middlewares/validations');
const UserController = require('./controllers/UserController');
const logoutController = require('./controllers/LogoutController');
const loginController = require('./controllers/LoginController');
const perfilController = require('./controllers/PerfilController');
const { ensureAuthenticated, fowardAuthenticated } = require('./middlewares/authenticated');
const passport = require('passport');

const routes = express.Router();

routes.get('/', loginController.index);
routes.get('/register', UserController.index);

routes.post('/login', passport.authenticate('local', {
  successRedirect: '/perfil',
  failureRedirect: '/',
}));
routes.post('/logout', logoutController);

routes.post('/create', UserController.store);
// routes.get('/perfil', UserController.show);
routes.get('/perfil', ensureAuthenticated, perfilController.index);

module.exports = routes;