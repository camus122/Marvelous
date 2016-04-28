  var mongoose= require('mongoose');
  mongoose.connect('mongodb://localhost/marvelous');
  module.exports=mongoose;
  module.exports.schemas=require('./schemas')(mongoose);
  console.log('init-mongo');
