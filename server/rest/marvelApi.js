

module.exports=function(app,responseTypes,httpStatus){
   var marvel=require('../helpers/marvel')('c5d5ec29fba2de343f8b6b3bf4a8c080','d9967a638cce0bdbec37a995cab3f2a9f33b7696');

  app.get('/v1/marvel/characters',function(req, res) {
    var dataResponse=undefined;
    //el request debe definir el offset y el limit
    marvel.characters.find(req.query.limit,req.query.offset,req.query.nameStartsWith,function(error,response,body){
      if(error){
        console.error(error);
        return;
      }
      //Remover del resultado aquellos personaes que no tiene imagen

      dataResponse=JSON.parse(body.trim()).data;


      //Filter deja solo los que cumplen con la condicion
      dataResponse.results= dataResponse.results.filter(function(element){
        return element.thumbnail.path.indexOf('image_not_available')==-1;
      })

      res.status(httpStatus.OK).send(responseTypes.getResponse(httpStatus.OK,responseTypes.SUCCESS,dataResponse));

    })

  })







}
