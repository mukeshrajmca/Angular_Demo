"use strict";
var app = angular.module("myApp", ['ngRoute']);
app.config(['$routeProvider',function(provider){
 provider.when('/add',{
  templateUrl:"partial/add.html",
  controller:'PersonController'
 }).
 when('/',{
   templateUrl:"partial/list.html",
   controller:"homeController"
 });
}]);