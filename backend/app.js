/**
 * Module dependencies.
 */
var express = require('express');
var routes = require('./routes');
var db = require('./model/db');
var user = require('./routes/user');
var http = require('http');
var path = require('path');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('your secret here'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

// Routes

// Adding Access-Control-Allow Headers to all responses (cross site xhr)
app.all('/*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, OPTIONS, DELETE");
  res.header("Access-Control-Allow-Headers", "Accept, X-Requested-With, Content-Type");
  next();
 });

app.get('/', routes.index);
app.get('/users', user.list);
app.get('/users/:userId', user.show);
app.post('/users/:userId?', user.create);
app.put('/users', user.update);
app.delete('/users/:userId', user.delete);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
