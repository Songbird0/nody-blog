// Third party

const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

// Internal

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

const handlers = require('./middleware/internal-handlers');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.disable('x-powered-by');

app.use(logger('combined'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use('/static', express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

/*
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  const my_error = createError(404, "This page doesn't exist.");
  next(my_error);
});
*/
// error handler
app.use(handlers.genericErrorHandler);

module.exports = app;
