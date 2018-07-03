// Creation of Angular Module
var app = angular.module('SampleApp',[]);

// Creation of Controller
app.controller('SampleAppCtrl',function($scope) {
    $scope.time  = '';
    $scope.greeting = '';
    $scope.greet = function() {
        if($scope.time <= 12){
            $scope.greeting = 'Good Morning';
        }
        else{
            $scope.greeting = 'Good Evening';
        }
    };
});
