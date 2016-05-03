/**
 * Created by Camus-122 on 29/04/2016.
 */
angular.module('singupApp', [])
  .controller('SingUpController', function($scope,$http) {
    $scope.user={};

    $scope.singup=function(){
      $http.post('/users', $scope.user).then(function(data){
        console.log(data.data.msg);
      }, function(err){
        console.error(err.data.msg);
      })
    }
  });
