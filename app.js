var createError = require('http-errors');
const db = require('./db/index');
var express = require('express');
var path = require('path');
var logger = require('morgan');
//session
var cookieParser = require('cookie-parser');
let session = require ("express-session")

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
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
  secret: "productsdb",
  resave: false,
  saveUninitialized: true,
  cookie: { secure: true } 
})) 

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use ("/products", productsRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {}
  // render the error page  
  res.status(err.status || 500);
  res.render('error');
});

app.use(async (req, res, next) => {
  if (req.cookies.userId && !req.session.userId) {
      req.session.userId = req.cookies.userId;
  }
  if (req.session.userId) {
      const user = await User.findByPk(req.session.userId);
      if (user) {
          req.user = user;
      }
  }
  next();
});


module.exports = app;
