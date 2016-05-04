var app =angular.module('app', ['ngRoute','ngResource']);

app.config(function($routeProvider) {
  $routeProvider.
  //Home
  when('/', {controller:showGroupsController,templateUrl:"/views/showGroups.html"}).

  when('/addGroup', {controller:addGroupController, templateUrl:'/views/groupTemplate.html'}).
  when('/updateGroup/:id', {controller:updateGroupController, templateUrl:'/views/groupTemplate.html'}).

  otherwise({redirectTo:'/'});

});
