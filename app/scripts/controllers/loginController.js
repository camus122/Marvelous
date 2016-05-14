/**
 * Created by Camus-122 on 29/04/2016.
 */
angular.module('loginApp', [])
  .controller('LoginController', function($scope,$http,$window) {
        $scope.user={};
        $scope.login=function(){
          $http.post('v1/login', $scope.user).then(function(value){
            console.log(value.data.response);
            $window.location.href='/marvelous';
          }, function(err){
            console.log(err.data.response);
          })
      }
    });
