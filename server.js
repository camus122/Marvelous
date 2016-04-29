//REFERENCIAS: https://scotch.io/tutorials/using-mongoosejs-in-node-js-and-mongodb-applications

//Dato importante los required se ejecutan una soal vez, por lo tanto la instancia recuperada
//puede volver a invocarse sin miedo a que se reejecute la accion
//var mongoose=require('./server/db/mongoDefinition');
var mongojs = require('mongojs');
var mongoDb = mongojs('mongodb://localhost/marvelous');
var express = require('express');
//var path = require('path');
//var favicon = require('serve-favicon');
//var logger = require('morgan');
//var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var http=require('http');
var app = express(); //http://expressjs.com/es/api.html
//app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
//app.set('views','app');
app.use(express.static(__dirname+'/app'));
app.use('/bower_components',express.static(__dirname+'/bower_components'));

//No es neceasiro el reder para html
app.engine('html', require('ejs').renderFile);
app.set('view engine','html');

// Make our db accessible to our router
//Se ejecuta en cada oportunidad, esto nos permitira capturar cada request y aplicar
//manejadores de error, seteo de header o comportamiento cross :D
app.use(function(req,res,next){
  req.db = mongoDb;
  next();
});

var routes = express.Router();

/* GET users listing. */
routes.get('/', function(req, res) {
  res.render('index.html');
});


app.use('/', routes);

//API
require('./server/rest/apiDefinition')(app);


app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
})





