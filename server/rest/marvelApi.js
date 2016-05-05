
module.exports=function(app,responseTypes,httpStatus){

  var marvel=require('../helpers/marvel')('c5d5ec29fba2de343f8b6b3bf4a8c080','d9967a638cce0bdbec37a995cab3f2a9f33b7696');

  app.get('/v1/marvel/characters',function(req, res) {
    //el request debe definir el offset y el limit
    marvel.characters.findAll(2,0,function(error,response,body){
      res.status(httpStatus.OK).send(body);
    })

  })







}
