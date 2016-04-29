/**
 * Created by Camus-122 on 29/04/2016.
 */
angular.module('loginApp', [])
  .controller('LoginController', function($scope,$http) {
        $scope.user={};
        $scope.login=function(){
          $http.post('/login', $scope.user).then(function(){
            console.log('logeado!');
          }, function(err){
            console.log('error al loguear!');
          })
      }
    });
