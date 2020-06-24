const express = require('express');
const { errors } = require('celebrate');
const routes = require('./routes');
const cors = require('cors');
const session = require('express-session');
const passport = require('../src/config/auth');

const app = express();

app.use(cors());
app.use(express.json());
app.use(session({
  saveUninitialized: true,
  resave: 'true',
  secret: 'secret',
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(routes);
app.use(errors());

module.exports = app;