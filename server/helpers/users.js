/**
 * Created by Camus-122 on 02/05/2016.
 */

module.exports={
  getCollection:function(db){
    return db.collection('users');
  },
  /**
   *
   * @param db
   * @param email
   * @param callback(err,exist) {err: error DB, exist:boolean
     */
    existUser:function(db,email,callback) {
    this.getCollection(db).findOne({email: email},
        function (err, doc) {
          if(err!=null) callback(err,null);
          callback(null,doc!=null);
        });
    },
  /**
   *
   * @param db
   * @param user
   * @param callback: function(saved) result:boolean
     */
  saveUser:function(db,user,callback){
    this.getCollection(db).save(user,function(err,data){
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
   * @param email
   * @param password
   * @param callback: function(err,isValid) err:db error, isValid: boolean
     */
  validUser:function(db,email,password,callback){
    this.getCollection(db).findOne({email: email, password:password},
      function (err, doc) {
        if(err!=null) callback(err,null);
        callback(null,doc!=null);
      });
  }

}
