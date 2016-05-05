/**
 * Created by Camus-122 on 05/05/2016.
 */
module.exports=function(publickey,privatekey){
  var md5=require('js-md5');

  function getRequestObject(marvelApiUrl){
    var ts=Date.now();
    return {
      url:'http://gateway.marvel.com'+marvelApiUrl,
      qs:{
        ts:ts,
        apikey:publickey,
        hash:md5(ts+privatekey+publickey)
      }
    };
  }

  return {
    characters:require('./marvelLib/characters')(getRequestObject)
  }

};
