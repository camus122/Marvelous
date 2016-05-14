/**
 * Created by Camus-122 on 04/05/2016.
 */

module.exports= {
  getCollection: function (db) {
    return db.collection('groups');
  },
  /**
   *
   * @param db
   * @param name
   * @param callback(err,exist) {err: error DB, exist:boolean
     */
  existGroup:function(db,name,callback) {
    this.getCollection(db).findOne({name: name},
      function (err, doc) {
        if(err!=null) callback(err,null);
        callback(null,doc!=null);
      });
  },

  /**
   *
   * @param db
   * @param email
   * @param callback(err,docs) {err: error DB, docs: return all documents
     */
  findAll: function (db, callback) {
    this.getCollection(db).find({},
      function (err, docs) {
        if (err != null) callback(err, null);
        callback(null, docs);
      });
  },

  /**
   *
   * @param db
   * @param group
   * @param callback: function(saved) result:boolean
   */
  saveGroup:function(db,group,callback){
    this.getCollection(db).save(group,function(err){
      var saved=err==null;
      if(!saved){
        console.error(err);
      }
      if(callback!=null) callback(err,saved);

    });
  },

  /**
   *
   * @param db
   * @param id
   * @param callback
     */
  deleteGroup:function(db,id,callback){
    this.getCollection(db).remove({_id:db.ObjectId(id)},function(err){
      var saved=err==null;
      if(!saved){
        console.error(err);
      }
      if(callback!=null) callback(err,saved);

    });

  }

}


