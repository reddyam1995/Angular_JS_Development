// create a Angular Module
var app = angular.module('GreetApp',[]);

// Create a Controller
app.controller('GreetAppCtrl',function($scope) {
    $scope.time = '';
    $scope.greeting = '';
    $scope.greetMsg = function() {
        if($scope.time === null){
            $scope.greeting = '';
        }
        else{
            if($scope.time <= 12){
                $scope.greeting = 'Good Morning';
            }
            else if($scope.time >12 && $scope.time <= 17){
                $scope.greeting = 'Good Afternoon';
            }
            else if($scope.time >17 && $scope.time <= 24){
                $scope.greeting = 'Good Evening';
            }
            else{
                $scope.greeting = 'Enter Proper time';
            }
        }
    };
});