var createError = require('http-errors');
const db = require("./database/models");
var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
const session = require ("express-session")

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var productsRouter = require("./routes/products")
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(cookieParser());


app.use(session({
  secret: "productsdb",
  resave: false,
  saveUninitialized: true,
})) 


app.use((req, res, next)=> {
  res.locals.cookies = req.cookies.cookieEmail;
  res.locals.userSession = req.session.userSession; 
  console.log(req.session.userSession)
  next();
});

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use ("/products", productsRouter);

module.exports = app;
