var app = angular.module("myApp",[]);
app.controller('homeCtrl',['$scope',function($scope){
    
    $scope.persons = [
        {
         fname:'Mukesh',
         lname:'Singh',
         mobile:'897968575',
         option:'Edit'
        },
        {
         fname:'Rakesh',
         lname:'Singh',
         mobile:'897968575',
         option:'Edit'
        },
        {
         fname:'Brajesh',
         lname:'Singh',
         mobile:'897968575',
         option:'Edit'
        },
        {
         fname:'Prakesh',
         lname:'Singh',
         mobile:'897968575',
         option:'Edit'
        }
    ];
    $scope.save = function(){
        $scope.persons.push({fname:$scope.person.fname,lname:$scope.person.lname,mobile:$scope.person.mobile,option:'Edit'});
    }
    
    $scope.remove = function(person){
            var pos = $scope.persons.indexOf(person);
            deleteUser = window.confirm('Are you sure you want to delete the Ad?');
            if(deleteUser){
            $scope.persons.splice(pos,1);
            }

        }
    $scope.edit = function(person){
        person.editPerson = true;
        console.log(person);
        person.option = "Save";
        jQuery(".fname").click(function(){
           alert("clicked on fname");
        });
        }
}]);