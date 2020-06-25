const express = require('express');
const { errors } = require('celebrate');
const routes = require('./routes');
const cors = require('cors');
const session = require('express-session');
const passport = require('../src/config/auth');
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const app = express();

app.use(express.static(path.resolve(__dirname, 'assets')));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({
  saveUninitialized: true,
  resave: 'true',
  secret: 'secret',
}));
app.use(passport.initialize());
app.use(passport.session());
app.set('views', path.resolve(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(routes);
app.use(cors());
app.use(errors());

module.exports = app;