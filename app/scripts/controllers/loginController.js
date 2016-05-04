/**
 * Created by Camus-122 on 29/04/2016.
 */
angular.module('loginApp', [])
  .controller('LoginController', function($scope,$http,$window) {
        $scope.user={};
        $scope.login=function(){
          $http.post('/login', $scope.user).then(function(data){
            console.log(data.data.msg);
            $window.location.href='/marvelous';
          }, function(err){
            console.log(err.data.msg);
          })
      }
    });
