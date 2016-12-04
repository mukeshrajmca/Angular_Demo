var app = angular.module('myApp',[]);
app.controller('firstCtrl', ['$scope','share', function ($scope,share) {

      $scope.person = share;

}]);

app.controller('secondCtrl', ['$scope','share', function ($scope,share) {

  $scope.person = share;
    console.log($scope.person.fullName());
    }]);

 app.factory("share",function(){
    
     return {
         name:'Mukesh Singh',
         fullName:function(){
             return "Kismat Karkar";
         }
        };
 });    
