


module.exports=function(app){
  var responseTypes= require('../helpers/responseTypes');
  var httpStatus = require('http-status-codes'); //https://www.npmjs.com/package/http-status-codes
  require('./authentication')(app,responseTypes,httpStatus);
  require('./groupApi')(app,responseTypes,httpStatus);
  require('./marvelApi')(app,responseTypes,httpStatus);
}



//require('groupApi')(appInstance);
