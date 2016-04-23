
//Dato importante los required se ejecutan una soal vez, por lo tanto la instancia recuperada
//puede volver a invocarse sin miedo a que se reejecute la accion
//var mongoose=require('./db/mongoDefinition');
var express = require('express');
var path = require('path');
//var favicon = require('serve-favicon');
//var logger = require('morgan');
//var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var http=require('http');
var app = express();
//app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.set('views','app');
//app.use(express.static(path.join('/app')));
//app.use('/bower_components',  express.static( path.join('../bower_components')));;
//app.use(express.static(__dirname + '/public'));
app.use(express.static('app'));
app.use('/bower_components',express.static('bower_components'));
app.engine('html', require('ejs').renderFile);
app.set('view engine','html');

//app.use(cookieParser());
// Make our db accessible to our router
app.use(function(req,res,next){
  //req.mongoose = mongoose;
  next();
});



//Seteo del deirectorio de las vistas y el engine html
//app.set('views', path.join('/client', 'views'));
//app.set('view engine', 'jade');

var routes = express.Router();

/* GET users listing. */
routes.get('/', function(req, res) {
  res.render('index.html');
});

app.use('/', routes);

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
})






