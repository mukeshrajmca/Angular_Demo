app.controller('homeController', ['UserService','$scope', function (myService,$scope) {
  // Do something with myService
     $scope.persons = [
    {
     fname:"Mukesh",
     lname:"Kumar",
     age:"29"
    },
     {
     fname:"Poonam",
     lname:"Sinha Deo",
     age:"27"
    },
    {
     fname:'HHH',
     lname:"Dev Deo",
     age:"27"
    }
];
     $scope.persons.push(myService.getUser());
}]);

// PersonController
app.controller('PersonController',['$scope','UserService',function($scope,myService){
     $scope.save = function(person){
     myService.setUser(person);
     window.location.href = "#/";
   }
}]);

 //services
 app.factory('UserService', function() {
    person = {};
    person.setUser = function(person){
    window.sessionStorage['data'] = JSON.stringify(person);
  }
    person.getUser = function(){
    return angular.fromJson(window.sessionStorage['data']);
  }
    return person; 
});
