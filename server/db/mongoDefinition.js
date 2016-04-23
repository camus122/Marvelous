  var mongoose= require('mongoose');
  mongoose.connect('mongodb://localhost/marvelous');
  module.exports=mongoose;
  console.log('init-mongo');
  module.exports.schemas=require('./schemas').init(mongoose);
