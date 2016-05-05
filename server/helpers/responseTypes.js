/**
 * Created by Camus-122 on 02/05/2016.
 */
exports.VALIDATION = 409;
exports.FAILURE=500;
exports.ERROR=417;
exports.SUCCESS=200;
exports.getResponse=function(code,kind,response){
  return { code: code,
          kind:  kind,
          response: response
        }
}
