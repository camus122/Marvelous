/**
 * Created by Camus-122 on 22/04/2016.
 * expressApi: http://expressjs.com/es/api.html
 */

var HttpStatus = require('http-status-codes'); //https://www.npmjs.com/package/http-status-codes
module.exports=function(app){
 //var marvelApi=require('./marvel.js')(app);

  app.post('/users',function(req, res){
    var user=req.body;
    var db=req.db;

    db.users.findOne({username: user.username},
      function(err, doc) {
       console.log('Econtro el dato:'+doc);
    });


    db.users.save(user,function(err,data){
      console.log('Usuario creado!');
    })
  });

  app.post('/login',function(req,res){
      var data=req.body;
      console.log('user logged'+ data);
    res.status(HttpStatus.INTERNAL_SERVER_ERROR).send({
        error: HttpStatus.getStatusText(HttpStatus.INTERNAL_SERVER_ERROR)
      });
    res.send
  });

}
