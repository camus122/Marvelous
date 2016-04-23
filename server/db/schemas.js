/**
 * Created by Camus-122 on 22/04/2016.
 */
module.exports={
  init:function(dbInstance){
    return {
      user: require('../schema/userSchema').create(dbInstance)
    }
  }
}
