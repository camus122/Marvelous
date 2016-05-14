/**
 * Created by Camus-122 on 04/05/2016.
 */
//https://www.npmjs.com/package/marvel-api

var groupHelper= require('../helpers/groups');


module.exports=function(app,responseTypes,httpStatus){

  /**
   * Consultar grupos
   */
  app.get('/v1/groups',function(req, res) {
    var db = req.db;
    groupHelper.findAll(db, function (err, docs) {
      if(err){
        res.status(httpStatus.CONFLICT).send(responseTypes.getResponse(httpStatus.CONFLICT,responseTypes.FAILURE,err,'Error al consultar grupos..'));
      }
      res.status(httpStatus.OK).send(responseTypes.getResponse(httpStatus.OK,responseTypes.SUCCESS,docs));
    })
  });

  /**
   * Crear un grupo
   */
  app.post('/v1/groups',function(req, res) {
    var db = req.db;
    var group=req.body;
    if(group.name.trim().length==0){
      res.status(httpStatus.CONFLICT).send(responseTypes.getResponse(httpStatus.CONFLICT,responseTypes.VALIDATION,'','Nombre del grupo vacio.'));
      return;
    }

    if(group.characters.length===0){
      res.status(httpStatus.CONFLICT).send(responseTypes.getResponse(httpStatus.CONFLICT,responseTypes.VALIDATION,'','Lista de personajes vacia.'));
      return;
    }

    groupHelper.existGroup(db,group.name,function(err,exist){
      if(exist){
         res.status(httpStatus.CONFLICT).send(responseTypes.getResponse(httpStatus.CONFLICT,responseTypes.VALIDATION,err,'Ya existe un grupo con ese nombre.'));
      }
      else{
        groupHelper.saveGroup(db,group,function (err, saved) {
          if(err){
            res.status(httpStatus.CONFLICT).send(responseTypes.getResponse(httpStatus.CONFLICT,responseTypes.FAILURE,err,'Error al crear el grupo.'));
          }
          res.status(httpStatus.OK).send(responseTypes.getResponse(httpStatus.OK,responseTypes.SUCCESS,saved));
        })
      }

    })
  });

  /**
   * Crear un grupo
   */
  app.put('/v1/groups',function(req, res) {
    var db = req.db;
    var group=req.body;
    groupHelper.saveGroup(db,group,function (err, doc) {
      if(err){
        res.status(httpStatus.CONFLICT).send(responseTypes.getResponse(httpStatus.CONFLICT,responseTypes.FAILURE,err,'Error al actualizar el grupo.'));
      }
      res.status(httpStatus.OK).send(responseTypes.getResponse(httpStatus.OK,responseTypes.SUCCESS,doc));
    })
  })

  /**
   * Elimina un grupo
   */
  app.del('/v1/groups/:id',function(req, res) {
    var db = req.db;
    groupHelper.deleteGroup(db,req.params.id,function (err, doc) {
      res.status(httpStatus.OK).send(responseTypes.getResponse(httpStatus.OK,responseTypes.SUCCESS,doc));
    })
  })


}
