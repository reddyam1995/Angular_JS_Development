// Create an Angular JS Module
var app = angular.module('FistApp',[]);

// Create a Controller
app.controller('FirstAppCtrl',function($scope) {
    // add a variable to the scope
    $scope.time = null;
    $scope.greetMessage = '';
    $scope.greet = function() {
        if($scope.time === null){
            $scope.greetMessage = '';
        }
        else if($scope.time <= 12){
            $scope.greetMessage = 'Good Morning';
        }
        else if($scope.time >12 && $scope.time <= 17){
            $scope.greetMessage = 'Good AfterNoon';
        }
        else if($scope.time >17 && $scope.time <= 24){
            $scope.greetMessage = 'Good Evening';
        }
        else{
            $scope.greetMessage = 'Enter Proper Time';
        }
    };
});