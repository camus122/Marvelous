/**
 * Created by Camus-122 on 02/05/2016.
 */
exports.VALIDATION = "VALIDATION";
exports.FAILURE="FAILURE";
exports.ERROR="ERROR";
exports.SUCCESS="SUCCESS";
exports.getResponse=function(code,kind,response,info){
  return { code: code,
          kind:  kind,
          info: info,
          response: response
        }
}
