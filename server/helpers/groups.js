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
   * @param group (must have _od to make the match)
   * @param callback: function(saved) result:boolean
   * @reference: https://docs.mongodb.org/manual/reference/command/findAndModify/
   */
  updateGroup:function(db,group,callback){
    var data=this.getCollection(db).findAndModify({
      query: { _id: ObjectId('group._id') },
      //sort: { rating: 1 },
      update:  group
    });
    callback(data.ok==1);
    }
}


