/**
 * Created by Camus-122 on 22/04/2016.
 * expressApi: http://expressjs.com/es/api.html
 */

var HttpStatus = require('http-status-codes'); //https://www.npmjs.com/package/http-status-codes
var userHelper= require('../db/helpers/users');
var responseTypes= require('../misc/responseTypes');
module.exports=function(app){
 //var marvelApi=require('./marvel.js')(app);

  app.post('/users',function(req, res){
    var user=req.body;
    var db=req.db;
    userHelper.existUser(db,user.email,function(err,exist){
      if(!exist){
        userHelper.saveUser(db,user,function(err,saved){
          if(saved){
            res.status(HttpStatus.OK).send(responseTypes.getResponse(HttpStatus.OK,responseTypes.SUCCESS,'Usuario creado con exito!'));
          }else{
            console.error('El usuario'+user.email+' no pudo guardarse');
          }
        });
      }else{
        res.status(HttpStatus.CONFLICT).send(responseTypes.getResponse(HttpStatus.CONFLICT,responseTypes.VALIDATION,'Ya existe un usuario con este mail!'));
      }
    })

  });

  app.post('/login',function(req,res){
      var data=req.body;
      var db=req.db;

    userHelper.validUser(db,data.email,data.password,function(err,isValid){
      if(isValid){
        res.status(HttpStatus.OK).send(responseTypes.getResponse(HttpStatus.OK,responseTypes.SUCCESS,'Login exitoso!'));
      }else{
        res.status(HttpStatus.CONFLICT).send(responseTypes.getResponse(HttpStatus.CONFLICT,responseTypes.ERROR,'Usuario invalido'));
      }
    })
  });

}
