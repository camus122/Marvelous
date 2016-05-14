var app =angular.module('app', ['ngRoute','ngResource','ngDragDrop','groupDirectivesModule','crossDirectivesModule']);

app.config(function($routeProvider,$httpProvider) {


  $routeProvider.
  //Home
  when('/', {controller:showGroupsController,templateUrl:"/views/showGroups.html"}).

  when('/addGroup', {controller:addGroupController, templateUrl:'/views/groupTemplate.html'}).
  when('/updateGroup/:id', {controller:updateGroupController, templateUrl:'/views/groupTemplate.html'}).

  otherwise({redirectTo:'/'});

});

app.run(function($rootScope){
  $rootScope.alertMessage={show:false};
})
//Creando interceptor general
app.factory('globalMessageInterceptor', function($rootScope,$q){
  return {
     responseError: function(res) {
       $rootScope.alertMessage={
         show:true,
         type: res.data.kind,
         info: res.data.info,
     };
    return $q.reject(res); //Se fuerza a realizar el promise ya que se esta sobrescribiendo parte del intercepteor
    }
  }

}).config(function($httpProvider) {
  $httpProvider.interceptors.push('globalMessageInterceptor');
})
