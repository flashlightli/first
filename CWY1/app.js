var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');

var index = require('./routes/index');
var users = require('./routes/users');
var reg=require('./routes/reg');
var logout=require('./routes/logout');
var checkid=require('./routes/checkid');
 var addtalk=require('./routes/addtalk');
var dele=require('./routes/dele');
var page=require('./routes/page');
var person=require('./routes/person');
var mypage=require('./routes/mypage');
//var chat=require('./routes/chat')

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

app.use(cookieParser());
app.use(session({ secret: '123'}));
app.use('/', index);
app.use('/users', users);
app.use('/reg',reg);
app.use('/logout',logout);
app.use('/checkid',checkid);
 app.use('/dele',dele);
 app.use('/page',page);
app.use('/person',person);
app.use('/mypage',mypage);
app.use("/addtalk",addtalk);
//app.use('/chat',chat);

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
app.listen(8888);

module.exports = app;
