/**
 * Created by Camus-122 on 04/05/2016.
 */
//https://www.npmjs.com/package/marvel-api

var groupHelper= require('../helpers/groups');


module.exports=function(app,responseTypes,httpStatus){

  app.get('/v1/groups',function(req, res) {
    var db = req.db;
    groupHelper.findAll(db, function (err, docs) {
        //responder docs
    })

  })

}
