
module.exports=function(getRequestObject){
  var request = require('request');
  return {
    /**
     *
     * @param limit
     * @param offset
     * @param fn: function (error, response, body)
       */
    //findAll:function(limit,offset,fn){
    //  var urlObject=getRequestObject('/v1/public/characters');
    //  urlObject.qs.limit=limit;
    //  urlObject.qs.offset=offset;
    //  request.get(urlObject,function(error, response, body){
    //    fn(error, response, body);
    //  });

      find:function(limit,offset,nameStartsWith,fn){
        var urlObject=getRequestObject('/v1/public/characters');
        urlObject.qs.limit=limit;
        urlObject.qs.offset=offset;
        if(nameStartsWith){
          urlObject.qs.nameStartsWith=nameStartsWith;
        }
        request.get(urlObject,function(error, response, body){
          fn(error, response, body);
        });

    }
  }
};
